// React
import React, { Fragment } from 'react';
// Mis importaciones
import { Collection } from '../coleccion/Collection';

export const Index = () => {
    const elementosPrueba = [
        {
            title: 'Elemento 1',
            text: 'Elemento de pruebas número 1',
            involucrados: ['yo', 'pepe'],
            fecha: new Date(2023, 1, 2),
            cover: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/2a/fe/volcan-osorno.jpg?w=1200&h=1200&s=1'
        },
        {
            title: 'Elemento 2',
            text: 'Elemento de pruebas número 2',
            involucrados: ['yo', 'francica'],
            fecha: new Date(2023, 1, 4),
            cover: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/2a/fe/volcan-osorno.jpg?w=1200&h=1200&s=1'
        },
        {
            title: 'Elemento 3',
            text: 'Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3',
            involucrados: ['yo', 'francica'],
            fecha: new Date(2023, 1, 4),
            cover: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/2a/fe/volcan-osorno.jpg?w=1200&h=1200&s=1'
        }
    ];
    return (
        <Fragment>
            <h2 style={{textAlign: 'center', marginTop: '10px'}}>Últimos registros</h2>
            <hr />
            <div className="collections">
                {
                    elementosPrueba.map((element, index) => (
                        <Collection key={index} collection={element} />
                    ))
                }
            </div>
        </Fragment>
    )
}
