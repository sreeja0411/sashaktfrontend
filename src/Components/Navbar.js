import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const [showBox, setShowBox] = useState(false);

    const location = useLocation();

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    const toggleBox = () => {
        setShowBox(!showBox);
    };

    const navbarStyle = {
        backgroundColor: '#fff', // Change the background color to red
        padding: '5px',
        color: '#FFFFFF', // White text color
    };

    const boxStyle = {
        display: showBox ? 'block' : 'none',
        backgroundColor: '#fff',
        width: '300px',
        padding: '10px',
        position: 'absolute',
        top: '60px',
        right: '10px',
        zIndex: '999',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Box shadow property
        border: '2px solid #ccc', // Border property
    };

    const handleEmojiClick = () => {
        toggleBox();
    };

    return (
        <div>
            <header className="header" style={navbarStyle}>
                <a href="/" className="logo"> SASHAKT</a>
                <nav className={`navbar ${isActive ? 'active' : ''}`}>
                    <Link to="/" >Home</Link>
                    <Link to="/About" >About</Link>
                    <Link to="/Activities" >Activities</Link>
                    <Link to="/Emergency" >Emergency</Link>
                </nav>
                <img
                    className="emoji-img"
                    src={sessionStorage.getItem('emoji')}
                    onClick={handleEmojiClick}
                />
                <div className="icons">
                    <button
                        id="menu-toggle"
                        className="fas fa-bars"
                        onClick={handleToggle}
                    ></button>
                </div>
            </header>
            {/* Render the box conditionally */}
            <div style={boxStyle}>
                <img
                    className="emoji-img2"
                    src={sessionStorage.getItem('emoji')}
                />
                <h5 className='username'>{sessionStorage.getItem("Name")}</h5>
                <Link to="/select" className="custom-link">
                    <button className="custom-button">SWITCH PROFILE</button>
                </Link>

            </div>
        </div>
    );
};

export default Navbar;
