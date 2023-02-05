// React
import React from 'react';
// React router dom
import { Link } from 'react-router-dom';

export const Collection = ({collection}) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const text = collection.text.length < 20 ? collection.text : collection.text.substr(0, 20) + '...';

    return (
        <div className="card">
            <div className="content">
                <h2>{collection.title}</h2>
                <p>{collection.fecha.toLocaleDateString('es-ES', options)}</p>
                <p>{text}</p>
                <Link to="/collection" className='btn-see-more'><span></span>Ver mas<span><i className="fa-solid fa-right-long"></i></span></Link>
            </div>
            <div className="details">
                <div className="image">
                    <img src={collection.cover} alt={collection.title} />
                </div>
                <h3>{collection.autor}<br /><span>Categoría: {collection.category}</span></h3>
            </div>
        </div>
    )
}
