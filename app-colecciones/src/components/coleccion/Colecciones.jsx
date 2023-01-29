// React
import React, { Fragment, useState } from 'react';
// Mis importaciones
import { Collection } from './Collection';
import { elementosPrueba } from '../../data/elements';

export const Colecciones = () => {
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
