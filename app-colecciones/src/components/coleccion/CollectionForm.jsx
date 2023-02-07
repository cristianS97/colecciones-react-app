import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { elementosPrueba } from '../../data/elements';
import moment from 'moment';
import Swal from 'sweetalert2';
import { GalleryEdit } from './edit/GalleryEdit';
import { SimpleInput } from './edit/SimpleInput';
import { SelectCategory } from './edit/SelectCategory';

export const CollectionForm = ({type}) => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState(['cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6'])

    let initState;
    if(type === 'edit') {
        initState = {
            ...elementosPrueba[1],
            date: moment(elementosPrueba[1].date).format('yyyy-MM-DD')
        };
    } else {
        initState = {
            title: '',
            text: '',
            author: '',
            category: categories[0],
            date: moment().format('yyyy-MM-DD'),
            cover: '',
            elements: []
        };
    }

    const [collection, setCollection] = useState(initState);

    const {title, text, author, date, category, cover, elements} = collection;
    const [checkedState, setCheckedState] = useState(new Array(elements.length).fill(false));

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Quieres guardar los cambios?',
            showDenyButton: true,
            confirmButtonText: '<i className="fa-solid fa-check"></i> Guardar',
            denyButtonText: '<i className="fa-solid fa-ban"></i> No cambiar',
        }).then((result) => {
            if (result.isConfirmed) {
                removeImages();
                Swal.fire('Guardado!', '', 'success').then(() => {
                    navigate('/collection');
                });
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
        checkedState.forEach((element, i) => {
            if(!element) {
                newImages.push(elements[i]);
            }
        });
        setCollection({
            ...collection,
            elements: newImages
        });
        setCheckedState(new Array(elements.length).fill(false));
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
        elements[e.target.id].description = e.target.value;
        setCollection({
            ...collection,
            elements: elements
        });
    }

    const handleImageChange = (e) => {
        elements[e.target.id].image = URL.createObjectURL(e.target.files[0]);
        setCollection({
            ...collection,
            elements: elements
        });
    }

    const addImage = (e) => {
        e.preventDefault();
        setCollection({
            ...collection,
            elements: [...elements, {id:Math.random().toString(), image:'', description:''}]
        });
    }

    return (
        <div className='collectionEdit'>
            <h1>{type === 'edit' ? 'Edite su entrada' : 'Cree una nueva colección'}</h1>
            <form className='formEditCollection' action="" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col">
                        <SimpleInput value={title} handleInputChange={handleInputChange} name="title" label="Titulo" />
                        <SimpleInput value={text} handleInputChange={handleInputChange} name="text" label="Texto" />
                        <SimpleInput value={author} handleInputChange={handleInputChange} name="author" label="Autor" />
                        <SelectCategory setCategories={setCategories} categories={categories} handleInputChange={handleInputChange} category={category} />
                        <div className="inputBox">
                            <input
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
                        elements.map((image, idx) => (
                            <GalleryEdit
                                key={idx}
                                image={image}
                                idx={idx}
                                handleImageChange={handleImageChange}
                                handleTextChange={handleTextChange}
                                handleCheckChange={handleCheckChange}
                                checkedState={checkedState}
                            />
                        ))
                    }
                </div>
                <div className="btns">
                    <button className='btn' type="submit">
                        <span><i className="fas fa-save"></i> Guardar</span>
                        <span><i className="fas fa-save"></i> Guardar</span>
                    </button>
                    <button onClick={addImage} className='btn'>
                        <span><i className="fa-solid fa-square-plus"></i> imagen</span>
                        <span><i className="fa-solid fa-square-plus"></i> imagen</span>
                    </button>
                </div>
            </form>
        </div>
    )
}
