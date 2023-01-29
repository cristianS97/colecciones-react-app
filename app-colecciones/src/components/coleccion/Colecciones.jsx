// React
import React from 'react';
// Mis importaciones
import { Collection } from './Collection';

export const Colecciones = () => {
    const elementosPrueba = [
        {
            title: 'Elemento 1',
            text: 'Elemento de pruebas número 1',
            involucrados: ['yo', 'pepe'],
            autor: 'juanito',
            fecha: new Date(2023, 1, 2),
            cover: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/2a/fe/volcan-osorno.jpg?w=1200&h=1200&s=1'
        },
        {
            title: 'Elemento 2',
            text: 'Elemento de pruebas número 2',
            involucrados: ['yo', 'francica'],
            autor: 'juanito',
            fecha: new Date(2023, 1, 4),
            cover: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/2a/fe/volcan-osorno.jpg?w=1200&h=1200&s=1'
        },
        {
            title: 'Elemento 3',
            text: 'Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3',
            involucrados: ['yo', 'francica'],
            autor: 'juanito',
            fecha: new Date(2023, 1, 4),
            cover: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/2a/fe/volcan-osorno.jpg?w=1200&h=1200&s=1'
        },
        {
            title: 'Elemento 1',
            text: 'Elemento de pruebas número 1',
            involucrados: ['yo', 'pepe'],
            autor: 'juanito',
            fecha: new Date(2023, 1, 2),
            cover: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/2a/fe/volcan-osorno.jpg?w=1200&h=1200&s=1'
        },
        {
            title: 'Elemento 2',
            text: 'Elemento de pruebas número 2',
            involucrados: ['yo', 'francica'],
            autor: 'juanito',
            fecha: new Date(2023, 1, 4),
            cover: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/2a/fe/volcan-osorno.jpg?w=1200&h=1200&s=1'
        },
        {
            title: 'Elemento 3',
            text: 'Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3',
            involucrados: ['yo', 'francica'],
            autor: 'juanito',
            fecha: new Date(2023, 1, 4),
            cover: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/2a/fe/volcan-osorno.jpg?w=1200&h=1200&s=1'
        },
        {
            title: 'Elemento 1',
            text: 'Elemento de pruebas número 1',
            involucrados: ['yo', 'pepe'],
            autor: 'juanito',
            fecha: new Date(2023, 1, 2),
            cover: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/2a/fe/volcan-osorno.jpg?w=1200&h=1200&s=1'
        },
        {
            title: 'Elemento 2',
            text: 'Elemento de pruebas número 2',
            involucrados: ['yo', 'francica'],
            autor: 'juanito',
            fecha: new Date(2023, 1, 4),
            cover: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/2a/fe/volcan-osorno.jpg?w=1200&h=1200&s=1'
        },
        {
            title: 'Elemento 3',
            text: 'Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3',
            involucrados: ['yo', 'francica'],
            autor: 'juanito',
            fecha: new Date(2023, 1, 4),
            cover: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/2a/fe/volcan-osorno.jpg?w=1200&h=1200&s=1'
        },
        {
            title: 'Elemento 3',
            text: 'Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3',
            involucrados: ['yo', 'francica'],
            autor: 'juanito',
            fecha: new Date(2023, 1, 4),
            cover: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/2a/fe/volcan-osorno.jpg?w=1200&h=1200&s=1'
        },
        {
            title: 'Elemento 3',
            text: 'Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3',
            involucrados: ['yo', 'francica'],
            autor: 'juanito',
            fecha: new Date(2023, 1, 4),
            cover: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/2a/fe/volcan-osorno.jpg?w=1200&h=1200&s=1'
        },
        {
            title: 'Elemento 3',
            text: 'Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3',
            involucrados: ['yo', 'francica'],
            autor: 'juanito',
            fecha: new Date(2023, 1, 4),
            cover: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/2a/fe/volcan-osorno.jpg?w=1200&h=1200&s=1'
        },
        {
            title: 'Elemento 3',
            text: 'Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3',
            involucrados: ['yo', 'francica'],
            autor: 'juanito',
            fecha: new Date(2023, 1, 4),
            cover: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/2a/fe/volcan-osorno.jpg?w=1200&h=1200&s=1'
        }
    ];

    return (
        <div className="collections">
            {
                elementosPrueba.map((element, index) => (
                    <Collection key={index} collection={element} />
                ))
            }
        </div>
    )
}
