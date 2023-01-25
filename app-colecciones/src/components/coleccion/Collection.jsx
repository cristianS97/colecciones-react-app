// React
import React from 'react';

export const Collection = ({collection}) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const text = collection.text.length < 20 ? collection.text : collection.text.substr(0, 20) + '...';

    return (
        <div className='card'>
            <div className="imgBox">
                <img src={collection.cover} alt="" />
            </div>
            <div className="content">
                <h2>{collection.title}</h2>
                <p>{collection.fecha.toLocaleDateString('es-ES', options)}</p>
                <p>{text}</p>
                <p>Personas: {collection.involucrados.join(', ')}</p>
            </div>
        </div>
    )
}
