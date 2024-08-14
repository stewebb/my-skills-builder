import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/style.scss';
import './Navbar.scss';

// Navbar Component
const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <nav className="navbar navbar-expand-md no-padding pt-0 pb-0">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">

                    {/* Left Navbar */}
                    <ul className="navbar-nav me-auto">

                        {/* Logo */}
                        <li className="nav-item px-1">
                            <img src='/images/MSB_Wide.png' style={{maxHeight: '40px'}} alt="Logo"/>
                        </li>

                        {/* Home */}
                        <li className="nav-item">
                            <Link className={`nav-link navbar-border ${currentPath === '/' ? 'active' : ''}`} to="/">
                                <i class="fa-solid fa-house"></i>&nbsp;Home
                            </Link>
                        </li>
                        
                        {/* My Skill Bank */}
                        <li className="nav-item">
                            <Link className={`nav-link navbar-border ${currentPath === '/mySkillBank' ? 'active' : ''}`} to="/mySkillBank">
                                <i class="fa-solid fa-database"></i>&nbsp;My Skill Bank
                            </Link>
                        </li>

                        {/* Settings */}
                        <li className="nav-item">
                            <Link className={`nav-link navbar-border ${currentPath === '/settings' ? 'active' : ''}`} to="/settings">
                                <i class="fa-solid fa-gear"></i>&nbsp;Settings
                            </Link>
                        </li>

                        {/* About */}
                        <li className="nav-item">
                            <Link className={`nav-link navbar-border ${currentPath === '/about' ? 'active' : ''}`} to="/about">
                                <i class="fa-solid fa-circle-question"></i>&nbsp;About
                            </Link>
                        </li>
                    </ul>
                    
                    {/* Right Navbar */}
                    <ul className="navbar-nav ms-auto">

                        {/* GitHub */}
                        <li className="nav-item">
                            <a className="nav-link navbar-border" href="https://github.com/stewebb/MSB" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>&nbsp;GitHub Repo
                            </a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
