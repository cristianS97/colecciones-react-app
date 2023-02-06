// React
import React, { useState } from 'react';
// moment js
import moment from 'moment';
// Mis importaciones
import { SimpleInput } from './edit/SimpleInput';
import { SelectCategory } from './edit/SelectCategory';

const categories = ['cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6'];

export const CollectionNew = () => {
    const [collection, setCollection] = useState({
        title: '', // ok
        text: '', // ok
        author: '', // ok
        category: categories[0], // ok
        date: moment().format('yyyy-MM-DD'), // ok
        cover: '', // ok
        elements: []
    });
    const {title, text, author, date, category, cover, elements} = collection;

    console.log(collection);

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

    return (
        <div className='collectionEdit'>
            <h1>Cree una entrada</h1>

            <form className='formEditCollection' action="">
                <SimpleInput value={title} handleInputChange={handleInputChange} name="title" label="Titulo" />
                <SimpleInput value={text} handleInputChange={handleInputChange} name="text" label="Texto" />
                <SimpleInput value={author} handleInputChange={handleInputChange} name="author" label="Autor" />
                <SelectCategory categories={categories} handleInputChange={handleInputChange} category={category} />

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

                <div className="btns">
                    <button className='btn' type="submit">
                        <span><i className="fas fa-save"></i> Guardar</span>
                        <span><i className="fas fa-save"></i> Guardar</span>
                    </button>
                    <button className='btn'>
                        <span><i className="fa-solid fa-square-plus"></i> imagen</span>
                        <span><i className="fa-solid fa-square-plus"></i> imagen</span>
                    </button>
                </div>
            </form>
        </div>
    )
}
