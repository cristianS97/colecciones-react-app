import React, { useState } from 'react';
// react router
import { NavLink, Link } from "react-router-dom";

export const Menu = () => {
    const [lineClass, setLineClass] = useState(false);
    const [hamburgerActive, setHamburgerActive] = useState('')

    const handleHamburgerClick = () => {
        setLineClass(!lineClass);
        if(hamburgerActive === 'active') {
            setHamburgerActive('');
        } else {
            setHamburgerActive('active');
        }
    }

    const handleLinkClick = () => {
        setLineClass(false);
        setHamburgerActive('');
    }

    return (
        <header>
            <div className="logo"><Link to='/'>My collections</Link></div>
            <div className={`hamburger ${hamburgerActive}`} onClick={handleHamburgerClick}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <nav className={lineClass ? 'active' : ''}>
                <ul>
                    <li>
                        <NavLink onClick={handleLinkClick} className={({ isActive }) => isActive ? 'active' : ''} to="/">Index</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleLinkClick} className={({ isActive }) => isActive ? 'active' : ''} to="/collections">Collections</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={handleLinkClick} to="/login">Logout</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
