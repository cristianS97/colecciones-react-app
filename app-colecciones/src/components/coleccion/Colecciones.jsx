// React
import React, { Fragment, useState } from 'react';
// Mis importaciones
import { Collection } from './Collection';

export const Colecciones = () => {
    const elementosPrueba = [
        {
            title: 'Elemento 1',
            text: 'Elemento de pruebas número 1',
            involucrados: ['yo', 'pepe'],
            autor: 'juanito',
            category: 'cat1',
            fecha: new Date(2023, 1, 2),
            cover: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/2a/fe/volcan-osorno.jpg?w=1200&h=1200&s=1'
        },
        {
            title: 'Elemento 2',
            text: 'Elemento de pruebas número 2',
            involucrados: ['yo', 'francica'],
            autor: 'juanito',
            category: 'cat1',
            fecha: new Date(2023, 1, 4),
            cover: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/2a/fe/volcan-osorno.jpg?w=1200&h=1200&s=1'
        },
        {
            title: 'Elemento 3',
            text: 'Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3',
            involucrados: ['yo', 'francica'],
            autor: 'juanito',
            category: 'cat2',
            fecha: new Date(2023, 1, 4),
            cover: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/2a/fe/volcan-osorno.jpg?w=1200&h=1200&s=1'
        },
        {
            title: 'Elemento 1',
            text: 'Elemento de pruebas número 1',
            involucrados: ['yo', 'pepe'],
            autor: 'juanito',
            category: 'cat1',
            fecha: new Date(2023, 1, 2),
            cover: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/2a/fe/volcan-osorno.jpg?w=1200&h=1200&s=1'
        },
        {
            title: 'Elemento 2',
            text: 'Elemento de pruebas número 2',
            involucrados: ['yo', 'francica'],
            autor: 'juanito',
            category: 'cat3',
            fecha: new Date(2023, 1, 4),
            cover: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/2a/fe/volcan-osorno.jpg?w=1200&h=1200&s=1'
        },
        {
            title: 'Elemento 3',
            text: 'Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3',
            involucrados: ['yo', 'francica'],
            autor: 'juanito',
            category: 'cat2',
            fecha: new Date(2023, 1, 4),
            cover: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/2a/fe/volcan-osorno.jpg?w=1200&h=1200&s=1'
        },
        {
            title: 'Elemento 1',
            text: 'Elemento de pruebas número 1',
            involucrados: ['yo', 'pepe'],
            autor: 'juanito',
            category: 'cat2',
            fecha: new Date(2023, 1, 2),
            cover: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/2a/fe/volcan-osorno.jpg?w=1200&h=1200&s=1'
        },
        {
            title: 'Elemento 2',
            text: 'Elemento de pruebas número 2',
            involucrados: ['yo', 'francica'],
            autor: 'juanito',
            category: 'cat2',
            fecha: new Date(2023, 1, 4),
            cover: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/2a/fe/volcan-osorno.jpg?w=1200&h=1200&s=1'
        },
        {
            title: 'Elemento 3',
            text: 'Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3',
            involucrados: ['yo', 'francica'],
            autor: 'juanito',
            category: 'cat3',
            fecha: new Date(2023, 1, 4),
            cover: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/2a/fe/volcan-osorno.jpg?w=1200&h=1200&s=1'
        },
        {
            title: 'Elemento 3',
            text: 'Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3',
            involucrados: ['yo', 'francica'],
            autor: 'juanito',
            category: 'cat1',
            fecha: new Date(2023, 1, 4),
            cover: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/2a/fe/volcan-osorno.jpg?w=1200&h=1200&s=1'
        },
        {
            title: 'Elemento 3',
            text: 'Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3',
            involucrados: ['yo', 'francica'],
            autor: 'juanito',
            category: 'cat1',
            fecha: new Date(2023, 1, 4),
            cover: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/2a/fe/volcan-osorno.jpg?w=1200&h=1200&s=1'
        },
        {
            title: 'Elemento 3',
            text: 'Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3',
            involucrados: ['yo', 'francica'],
            autor: 'juanito',
            category: 'cat1',
            fecha: new Date(2023, 1, 4),
            cover: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/2a/fe/volcan-osorno.jpg?w=1200&h=1200&s=1'
        },
        {
            title: 'Elemento 3',
            text: 'Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3Elemento de pruebas número 3',
            involucrados: ['yo', 'francica'],
            autor: 'juanito',
            category: 'cat2',
            fecha: new Date(2023, 1, 4),
            cover: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/b7/2a/fe/volcan-osorno.jpg?w=1200&h=1200&s=1'
        }
    ];
    const [activeCategory, setActiveCategory] = useState('all');
    const [elements, setElements] = useState(elementosPrueba);
    const categories = elementosPrueba.map(el => el.category).filter((value, index, self) => self.indexOf(value) === index);

    const handleClick = (e) => {
        setActiveCategory(e.target.textContent.toLowerCase());
        if(e.target.textContent.toLowerCase() === 'all') {
            setElements(elementosPrueba);
        } else {
            setElements(elementosPrueba.filter(el => el.category === e.target.textContent));
        }
    }

    return (
        <Fragment>
            <ul className='filtro-collections'>
                <li className={`${activeCategory==='all' ? 'active' : ''}`} onClick={(e) => handleClick(e)}>All</li>
                {categories.map((categorie, index) => (
                    <li className={`${activeCategory===categorie ? 'active' : ''}`} onClick={(e) => handleClick(e)} key={index}>{categorie}</li>
                ))}
            </ul>
            <div className="collections">
                {
                    elements.map((element, index) => (
                        <Collection key={index} collection={element} />
                    ))
                }
            </div>
        </Fragment>
    )
}
