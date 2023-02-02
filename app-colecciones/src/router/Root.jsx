// React
import React, { Fragment, useState } from 'react';
// React router
import { Outlet, useLocation } from "react-router-dom";
// Mis importaciones
import { Menu } from './Menu';
import { Footer } from '../components/Footer';
import { IrAlCielo } from '../components/IrAlCielo';

export const Root = () => {
    const location = useLocation();
    const [activeClass, setActiveClass] = useState('');
    const classCon = location.pathname !== '/login' && location.pathname !== '/collection' ? 'container' : '';

    window.addEventListener('scroll', () => {
        setActiveClass(window.scrollY !== 0 ? 'active' : '');
    });

    return (
        <Fragment>
            {location.pathname !== '/login' &&
                <Menu />
            }
            <div className={classCon}>
                <Outlet />
            </div>
            {location.pathname !== '/login' &&
                <Footer />
            }
            <IrAlCielo active={activeClass} />
        </Fragment>
    )
}
