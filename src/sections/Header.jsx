import React, { useState, useEffect } from 'react'

function Header() {

    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };

    }, []);

    return (
        <div className={`header-container ${isSticky ? 'sticky' : ''}`}>
            <nav className="nav-container">
                <div className={`logo-container ${isSticky ? 'sticky' : ''}`}>
                    <a className="logo-link" href="#home">
                        <img className="logo-img"
                            src="src/assets/logo.png" 
                            alt="logo-img"></img>
                    </a>
                </div>
                <div className="nav-item-container">
                    <ul className="nav-item-list">
                        <li className="nav-item">
                            <a href="#home"></a>HOME</li>
                        <li className="nav-item">
                            <a href="#shop"></a>SHOP</li>
                        <li className="nav-item">
                            <a href="#size-chart"></a>SIZE CHART</li>
                        <li className="nav-item">
                            <a href="#about"></a>ABOUT</li>
                        <li className="nav-item">
                            <a href="#contact-us"></a>CONTACT US</li>
                        <li className="nav-item">
                            <a href="#faqs"></a>FAQS</li>
                        <li className="nav-item">
                            <a href="#cart"></a>CART</li>
                        <li className="nav-item">
                            <a href="#profile"></a>PROFILE</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header