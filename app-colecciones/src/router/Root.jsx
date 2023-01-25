// React
import React, { Fragment } from 'react';
// React router
import { Outlet } from "react-router-dom";
// Mis importaciones
import { Menu } from './Menu';

export const Root = () => {
    return (
        <Fragment>
            <Menu />
            <div className="container">
                <Outlet />
            </div>
        </Fragment>
    )
}
