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
    const [checkedState, setCheckedState] = useState(new Array(images.length).fill(false));

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Quieres guardar los cambios?',
            showDenyButton: true,
            confirmButtonText: '<i class="fa-solid fa-check"></i> Guardar',
            denyButtonText: '<i class="fa-solid fa-ban"></i> No cambiar',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Guardado!', '', 'success');
                removeImages();
                navigate('/collection');
            } else if (result.isDenied) {
                Swal.fire('No se han guardado los cambios', '', 'error');
            }
        })
    }

    const handleCheckChange = (e) => {
        const newChecked = checkedState.map((element, idx) => {
            if(idx === parseInt(e.target.id)) {
                return e.target.checked;
            }
            return element;
        });
        setCheckedState(newChecked);
    }

    const removeImages = () => {
        let newImages = [];
        checkedState.map((element, i) => {
            if(!element) {
                newImages.push(images[i]);
            }
        });
        setCollection({
            ...collection,
            images: newImages
        });
        setCheckedState(new Array(images.length).fill(false));
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
        setCollection({
            ...collection,
            images: images
        });
    }

    const handleImageChange = (e) => {
        e.preventDefault();
        images[e.target.id].image = URL.createObjectURL(e.target.files[0]);
        setCollection({
            ...collection,
            images: images
        });
    }

    return (
        <div className='collectionEdit'>
            <h1>Edite su entrada</h1>
            <form className='formEditCollection' action="" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col">
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
                            <textarea
                                value={text}
                                onChange={handleInputChange}
                                name="text"
                                required
                            ></textarea>
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
                            <label className='imageUpload' htmlFor="inputTag">
                                <p><i className="fa fa-2x fa-camera"></i> Selecciona una imagen</p>
                                <input
                                    id="inputTag"
                                    type="file"
                                    onChange={(e) => setCover(URL.createObjectURL(e.target.files[0]))}
                                />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="images">
                    {
                        images.map((image, idx) => (
                            <div className="row" key={idx}>
                                <div className="col">
                                    <img
                                        style={{width: '100px'}}
                                        src={image.image}
                                        alt=""
                                    />
                                    <label className='imageUpload' htmlFor={idx}>
                                        <p><i className="fa fa-2x fa-camera"></i> Selecciona una imagen</p>
                                        <input
                                            type="file"
                                            onChange={handleImageChange}
                                            id={idx}
                                        />
                                    </label>
                                </div>
                                <div className="col">
                                    <div className="inputBox">
                                        <textarea
                                            id={idx}
                                            onChange={handleTextChange}
                                            value={image.description}
                                            required
                                        ></textarea>
                                        <i>Descripción</i>
                                    </div>
                                    <label>Borrar imagen
                                        <input
                                            type="checkbox"
                                            name="deleteImage"
                                            id={idx}
                                            onChange={handleCheckChange}
                                            checked={checkedState[idx]}
                                        />
                                    </label>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <button className='btn' type="submit">
                    <span><i className="fas fa-save"></i> Guardar</span>
                    <span><i className="fas fa-save"></i> Guardar</span>
                </button>
            </form>
        </div>
    )
}
