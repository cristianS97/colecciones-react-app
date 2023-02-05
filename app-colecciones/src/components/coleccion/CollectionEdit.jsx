import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { elementosPrueba } from '../../data/elements';
import moment from 'moment';
import Swal from 'sweetalert2';

export const CollectionEdit = () => {
    const navigate = useNavigate();
    const [collection, setCollection] = useState({
        title: elementosPrueba[0].title,
        text: elementosPrueba[0].text,
        author: elementosPrueba[0].autor,
        date: moment(elementosPrueba[0].fecha).format('yyyy-MM-DD'),
        category: elementosPrueba[0].category,
        cover: elementosPrueba[0].cover,
        images: elementosPrueba[0].elements
    });
    const {title, text, author, date, category, cover, images} = collection;

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Quieres guardar los cambios?',
            showDenyButton: true,
            confirmButtonText: 'Guardar',
            denyButtonText: 'No cambiar',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Guardado!', '', 'success');
                navigate('/');
            } else if (result.isDenied) {
                Swal.fire('No se han guardado los cambios', '', 'error');
            }
        })
    }

    const handleInputChange = (e) => {
        setCollection({
            ...collection,
            [e.target.name]: e.target.value
        });
    }

    const setDate = (date) => {
        setCollection({
            ...collection,
            date: date
        });
    }

    const setCover = (cover) => {
        setCollection({
            ...collection,
            cover: cover
        });
    }

    const handleTextChange = (e) => {
        e.preventDefault();
        images[e.target.id].description = e.target.value;
        // setImages(images);
        setCollection({
            ...collection,
            images: images
        });
    }

    const handleImageChange = (e) => {
        e.preventDefault();
        images[e.target.id].image = URL.createObjectURL(e.target.files[0]);
        // setImages(images);
        setCollection({
            ...collection,
            images: images
        });
    }

    return (
        <div className='collectionEdit'>
            <h1>Edite su entrada</h1>
            <form className='formEditCollection' action="" onSubmit={handleSubmit}>
                <div className="row1">
                    <div className="col1">
                        <div className="inputBox">
                            <input
                                value={title}
                                onChange={handleInputChange}
                                type="text"
                                name="title"
                                required
                            />
                            <i>Titulo</i>
                        </div>
                        <div className="inputBox">
                            <input
                                value={text}
                                onChange={handleInputChange}
                                type="text"
                                name="text"
                                required
                            />
                            <i>Texto</i>
                        </div>
                        <div className="inputBox">
                            <input
                                value={author}
                                onChange={handleInputChange}
                                type="text"
                                name="author"
                                required
                            />
                            <i>Autor</i>
                        </div>
                        <div className="inputBox">
                            <div className='selectCategory'>
                                <button type="button" className="list_btn">{category}</button>
                                <span className="button_arrow"></span>
                                <div className="option_container">
                                    <label className="option_field">
                                        <input
                                            onClick={handleInputChange}
                                            className="list_option"
                                            type="radio"
                                            name="category"
                                            value="cat1"
                                            title="Option 1"
                                        />Cat 1
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="option_field">
                                        <input
                                            onClick={handleInputChange}
                                            className="list_option"
                                            type="radio"
                                            name="category"
                                            value="cat2"
                                            title="Option 2"
                                        />Cat 2
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="option_field">
                                        <input
                                            onClick={handleInputChange}
                                            className="list_option"
                                            type="radio"
                                            name="category"
                                            value="cat3"
                                            title="Option 3"
                                        />Cat 3
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="option_field">
                                        <input
                                            onClick={handleInputChange}
                                            className="list_option"
                                            type="radio"
                                            name="category"
                                            value="cat4"
                                            title="Option 4"
                                        />Cat 4
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="option_field">
                                        <input
                                            onClick={handleInputChange}
                                            className="list_option"
                                            type="radio"
                                            name="category"
                                            value="cat5"
                                            title="Option 5"
                                        />Cat 5
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="option_field">
                                        <input
                                            onClick={handleInputChange}
                                            className="list_option"
                                            type="radio"
                                            name="category"
                                            value="cat6"
                                            title="Option 6"
                                        />Cat 6
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="inputBox">
                            <input
                                placeholder='fecha'
                                value={date}
                                onChange={(e) => setDate(moment(e.target.value).format('yyyy-MM-DD'))}
                                type="date"
                            />
                        </div>
                        <div className="inputBox">
                            <img src={cover} alt="" />
                            <input
                                placeholder='cover'
                                onChange={(e) => setCover(URL.createObjectURL(e.target.files[0]))}
                                type="file"
                            />
                        </div>
                    </div>
                </div>
                {
                    images.map((image, idx) => (
                        <div className="inputBox" key={idx}>
                            <img
                                style={{width: '100px'}}
                                src={image.image}
                                alt=""
                            />
                            <input
                                type="text"
                                id={idx}
                                onChange={handleTextChange}
                                value={image.description}
                                placeholder='Descripción'
                            />
                            <input
                                type="file"
                                id={idx}
                                onChange={handleImageChange}
                                placeholder='Imagen'
                            />
                            <input
                                type="checkbox"
                            />
                        </div>
                    ))
                }
                <input type="submit" value="Guardar" />
            </form>
        </div>
    )
}
