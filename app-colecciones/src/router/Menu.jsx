import React, { useState } from 'react';
// react router
import { NavLink } from "react-router-dom";

export const Menu = () => {
    const [lineClass, setLineClass] = useState(false);

    const handleHamburgerClick = () => {
        setLineClass(!lineClass);
    }

    return (
        <header>
            <div className="logo">My collections</div>
            <div className="hamburger" onClick={handleHamburgerClick}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <nav className={lineClass ? 'active' : ''}>
                <ul>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/">Index</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/collections">Collections</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/login">Login</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
