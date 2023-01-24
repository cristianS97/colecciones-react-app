import React from 'react';
// react router
import { Link } from "react-router-dom";

export const Menu = () => {
    return (
        <ul>
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/collections">Colecciones</Link>
            </li>
        </ul>
    )
}
