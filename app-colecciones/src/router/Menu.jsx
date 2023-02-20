import React, { useState, useContext, useEffect } from 'react';
// react router
import { NavLink, Link, useNavigate } from "react-router-dom";
// Mis importaciones
import { authContext } from '../reducer/context/authContext';

export const Menu = () => {
    const loginContext = useContext(authContext);
    const { initLogout } = loginContext;
    const navigate = useNavigate();
    const [lineClass, setLineClass] = useState(false);
    const [hamburgerActive, setHamburgerActive] = useState('');

    useEffect(() => {
        if(!loginContext.state.logged) {
            navigate('/login');
        }
    }, [loginContext, navigate])

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

    const handleLogout = (e) => {
        handleLinkClick();
        initLogout();
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
                        <NavLink onClick={handleLogout} to="/login">Logout</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
