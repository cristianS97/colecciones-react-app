// React
import React from 'react';
// Mis importaciones
import { elementosPrueba } from '../../data/elements';

export const CollectionDetail = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const collection = elementosPrueba[0];

    return (
        <div className='collectionDetail'>
            <div className="detail">
                <img style={{width: '250px'}} src={collection.cover} alt={collection.title} />
                <h2>{collection.autor} | {collection.title}</h2>
                <p>Categoría: {collection.category}</p>
                <p>{collection.fecha.toLocaleDateString('es-ES', options)}</p>
                <p>Personas: {collection.involucrados.join(', ')}</p>
                <p>{collection.text}</p>
            </div>
            <div className="gallery">
                <ul className="image-gallery">
                    {
                        collection.elements.map((element, idx) => (
                            <li key={idx}>
                                <img src={element.image} alt="" />
                                <div className="overlay"><span>{element.description}</span></div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
