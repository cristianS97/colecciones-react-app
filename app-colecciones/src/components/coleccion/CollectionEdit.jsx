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
CASI cover: imagen
elements: Arreglo
element: Objeto ->    { image: Imagen | description: texto }
*/

export const CollectionEdit = () => {
    const [title, setTitle] = useState(elementosPrueba[0]['title']);
    const [text, setText] = useState(elementosPrueba[0]['text']);
    const [author, setAuthor] = useState(elementosPrueba[0]['autor']);
    const [date, setDate] = useState(moment(elementosPrueba[0]['fecha']).format('yyyy-MM-DD'));
    const [category, setCategory] = useState(elementosPrueba[0]['category']);
    const [cover, setCover] = useState(elementosPrueba[0]['cover']);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(title, text, author, date, category);
    }


    return (
        <div>
            <h1>Edite su entrada</h1>
            <form className='formEditCollection' action="" onSubmit={handleSubmit}>
                <input placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="" id="" />
                <input placeholder='Text' value={text} onChange={(e) => setText(e.target.value)} type="text" name="" id="" />
                <input placeholder='Author' value={author} onChange={(e) => setAuthor(e.target.value)} type="text" name="" id="" />
                <select value={category} onChange={(e) => setCategory(e.target.value)} name="" id="">
                    <option value="cat1">Cat 1</option>
                    <option value="cat2">Cat 2</option>
                    <option value="cat3">Cat 3</option>
                    <option value="cat4">Cat 4</option>
                    <option value="cat5">Cat 5</option>
                </select>
                <input placeholder='fecha' value={date} onChange={(e) => setDate(moment(e.target.value).format('yyyy-MM-DD'))} type="date" name="" id="" />
                <img src={cover} alt="" />
                <input placeholder='cover' onChange={(e) => setCover(e.target.value)} type="file" name="" id="" />
                <br />
                <input type="text" name="" id="" placeholder='Descripción' />
                <input type="file" placeholder='Descripción' />
                <input type="checkbox" name="" id="" />
                <br />
                <input type="text" name="" id="" placeholder='Descripción' />
                <input type="file" placeholder='Descripción' />
                <input type="checkbox" name="" id="" />
                <br />
                <input type="text" name="" id="" placeholder='Descripción' />
                <input type="file" placeholder='Descripción' />
                <input type="checkbox" name="" id="" />
                <br />
                <input type="text" name="" id="" placeholder='Descripción' />
                <input type="file" placeholder='Descripción' />
                <input type="checkbox" name="" id="" />
                <br />
                <input type="submit" value="Guardar" />
            </form>
        </div>
    )
}
