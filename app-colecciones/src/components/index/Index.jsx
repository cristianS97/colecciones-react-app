// React
import React, { Fragment } from 'react';
// Mis importaciones
import { Collection } from '../coleccion/Collection';
import { elementosPrueba } from '../../data/elements';

export const Index = () => {
    return (
        <Fragment>
            <h2 style={{textAlign: 'center', marginTop: '10px'}}>Últimos registros</h2>
            <hr />
            <div className="collections">
                {
                    elementosPrueba.slice(0, 3).map((element, index) => (
                        <Collection key={index} collection={element} />
                    ))
                }
            </div>
        </Fragment>
    )
}
