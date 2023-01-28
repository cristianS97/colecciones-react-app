// React
import React, { Fragment } from 'react';
// React router
import { Outlet, useLocation } from "react-router-dom";
// Mis importaciones
import { Menu } from './Menu';

export const Root = () => {
    const location = useLocation();
    const classCon = location.pathname !== '/login' ? 'container' : '';

    return (
        <Fragment>
            {location.pathname !== '/login' &&
                <Menu />
            }
            <div className={classCon}>
                <Outlet />
            </div>
        </Fragment>
    )
}
