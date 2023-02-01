// React
import React, { Fragment } from 'react';
// React router
import { Outlet, useLocation } from "react-router-dom";
// Mis importaciones
import { Menu } from './Menu';
import { Footer } from '../components/Footer';

export const Root = () => {
    const location = useLocation();
    const classCon = location.pathname !== '/login' && location.pathname !== '/collection' ? 'container' : '';

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
        </Fragment>
    )
}
