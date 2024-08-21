// apiHooks.js

import { useState, useEffect } from 'react';

const API_URL = '/api'; // Base URL for your API

// Enhanced utility function to handle various API requests
const apiRequest = async (endpoint, method = 'GET', payload = null, headers = {}) => {
    try {
        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
        };

        // If there's a payload and the method is not GET, include it in the request
        if (payload && method !== 'GET') {
            options.body = JSON.stringify(payload);
        }

        const response = await fetch(`${API_URL}${endpoint}`, options);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'An error occurred');
        }

        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        throw error; // Rethrow the error to be handled by the caller
    }
};

// Generalized hook for fetching data from any API endpoint
const useApiData = (endpoint, method = 'GET', payload = null) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await apiRequest(endpoint, method, payload);
                setData(data);
            } catch (error) {
                setError(error.message || 'An unexpected error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint, method, JSON.stringify(payload)]); // Ensure payload changes trigger a re-fetch

    return { data, loading, error };
};

export { useApiData, apiRequest };
