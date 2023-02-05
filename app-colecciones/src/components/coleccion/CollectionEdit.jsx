import React, { useState } from 'react';
import { elementosPrueba } from '../../data/elements';
import moment from 'moment';

/*
OK    title: Texto
OK  text: Texto
involucrados: Varios elementos
OK  autor: Yo
OK  category: Opción única
OK  fecha: new Date(2023, 1, 2)
OK cover: imagen
elements: Arreglo
element: Objeto ->    { image: Imagen | description: texto }
*/

export const CollectionEdit = () => {
    const [title, setTitle] = useState(elementosPrueba[0].title);
    const [text, setText] = useState(elementosPrueba[0].text);
    const [author, setAuthor] = useState(elementosPrueba[0].autor);
    const [date, setDate] = useState(moment(elementosPrueba[0].fecha).format('yyyy-MM-DD'));
    const [category, setCategory] = useState(elementosPrueba[0].category);
    const [cover, setCover] = useState(elementosPrueba[0].cover);
    const [images, setImages] = useState(elementosPrueba[0].elements);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, text, author, date, category, cover);
    }

    const handleImageChange = (e) => {
        console.log(e.target.files[0]);
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
                                onChange={(e) => setTitle(e.target.value)}
                                type="text"
                                required
                            />
                            <i>Titulo</i>
                        </div>
                        <div className="inputBox">
                            <input
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                type="text"
                                required
                            />
                            <i>Texto</i>
                        </div>
                        <div className="inputBox">
                            <input
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                type="text"
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
                                            onClick={() => setCategory('cat1')}
                                            className="list_option"
                                            type="radio"
                                            name="list"
                                            title="Option 1"
                                        />Cat 1
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="option_field">
                                        <input
                                            onClick={() => setCategory('cat2')}
                                            className="list_option"
                                            type="radio"
                                            name="list"
                                            title="Option 2"
                                        />Cat 2
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="option_field">
                                        <input
                                            onClick={() => setCategory('cat3')}
                                            className="list_option"
                                            type="radio"
                                            name="list"
                                            title="Option 3"
                                        />Cat 3
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="option_field">
                                        <input
                                            onClick={() => setCategory('cat4')}
                                            className="list_option"
                                            type="radio"
                                            name="list"
                                            title="Option 4"
                                        />Cat 4
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="option_field">
                                        <input
                                            onClick={() => setCategory('cat5')}
                                            className="list_option"
                                            type="radio"
                                            name="list"
                                            title="Option 5"
                                        />Cat 5
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="option_field">
                                        <input
                                            onClick={() => setCategory('cat6')}
                                            className="list_option"
                                            type="radio"
                                            name="list"
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
                                value={date} onChange={(e) => setDate(moment(e.target.value).format('yyyy-MM-DD'))}
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
                            <img style={{width: '100px'}} src={image.image} alt="" />
                            <input type="text" value={image.description} name="" id="" placeholder='Descripción' />
                            <input type="file" onChange={(e) => handleImageChange(idx)} placeholder='Imagen' />
                            <input type="checkbox" name="" id="" />
                        </div>
                    ))
                }
                <input type="submit" value="Guardar" />
            </form>
        </div>
    )
}
