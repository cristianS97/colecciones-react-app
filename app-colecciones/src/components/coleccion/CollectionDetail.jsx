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
                <div className="container">
                    <h2>{collection.autor} | {collection.title}</h2>
                    <p>Categoría: {collection.category}</p>
                    <p>{collection.fecha.toLocaleDateString('es-ES', options)}</p>
                    <p>Personas: {collection.involucrados.join(', ')}</p>
                    <p>{collection.text}</p>
                    <div className="btns">
                        <button>Editar</button>
                        <button>Eliminar</button>
                    </div>
                </div>
            </div>
            <div className="gallery container">
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
