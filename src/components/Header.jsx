import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'
import logo from '../assets/logo.png'

function Header() {
    
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`header ${scrollPosition > 50 ? 'active' : ''}`}>
                <div className="header-inner-container">
                    <div className="logo-container">
                        <Link to="/">
                            <img 
                                src={logo} 
                                alt="logo.png"
                                className="logo"/>
                        </Link>
                    </div>
                    <nav className="nav-links-container">
                        <ul className="nav-list">
                            <li className="nav-link">
                                <Link to="/" className="nav-item">HOME</Link>
                            </li>
                            <li className="nav-link">
                                <Link to="/shop" className="nav-item">SHOP</Link>
                            </li>
                            <li className="nav-link">
                                <Link to="/size-chart" className="nav-item">SIZE CHART</Link>
                            </li>
                            <li className="nav-link">
                                <Link to="/about-us" className="nav-item">ABOUT US</Link>
                            </li>
                            <li className="nav-link">
                                <Link to="/contact-us" className="nav-item">CONTACT US</Link>
                            </li>
                            <li className="nav-link">
                                <Link to="/faqs" className="nav-item">FAQS</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Header