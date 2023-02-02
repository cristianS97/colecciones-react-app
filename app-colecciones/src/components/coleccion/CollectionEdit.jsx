import React from 'react';

/*
title: Texto
text: Texto
involucrados: Varios elementos
autor: Yo
category: Opción única
fecha: new Date(2023, 1, 2)
cover: imagen
elements: Arreglo
element: Objeto ->    { image: Imagen | description: texto }
*/

export const CollectionEdit = () => {
    return (
        <div>
            <input placeholder='Title' type="text" name="" id="" />
            <input placeholder='text' type="text" name="" id="" />
            <input placeholder='author' type="text" name="" id="" />
            <select name="" id="">
                <option value="cat1">Cat 1</option>
                <option value="cat2">Cat 2</option>
                <option value="cat3">Cat 3</option>
                <option value="cat4">Cat 4</option>
                <option value="cat5">Cat 5</option>
            </select>
            <input placeholder='fecha' type="date" name="" id="" />
            <input placeholder='cover' type="file" name="" id="" />
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
        </div>
    )
}
