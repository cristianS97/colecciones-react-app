// React
import React from 'react';
// React router dom
import { useNavigate, Link } from 'react-router-dom';
// Sweet alert
import Swal from 'sweetalert2';
// Mis importaciones
import { elementosPrueba } from '../../data/elements';

export const CollectionDetail = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const collection = elementosPrueba[0];
    const navigate = useNavigate();

    const deleteCollection = () => {
            Swal.fire({
            title: 'Quieres eliminar la colección y todos sus elementos?',
            showDenyButton: true,
            confirmButtonText: '<i class="fa-solid fa-check"></i> Si, eliminar',
            denyButtonText: '<i class="fa-solid fa-ban"></i> No, conservar',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Colección eliminada!', '', 'success').then(() => {
                    navigate('/');
                });
            } else if (result.isDenied) {
                Swal.fire('No se ha eliminado la colección', '', 'error');
            }
        })
    }

    return (
        <div className='collectionDetail'>
            <div className="detail">
                <img style={{width: '250px'}} src={collection.cover} alt={collection.title} />
                <div className="container">
                    <h2>{collection.autor} | {collection.title}</h2>
                    <p>Categoría: {collection.category}</p>
                    <p>{collection.fecha.toLocaleDateString('es-ES', options)}</p>
                    <p>{collection.text}</p>
                    <div className="btns">
                        <Link to='edit' className='btn'>
                            <span>Editar</span>
                            <span>Editar</span>
                        </Link>
                        <a className='btn' onClick={deleteCollection}>
                            <span>Eliminar</span>
                            <span>Eliminar</span>
                        </a>
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
