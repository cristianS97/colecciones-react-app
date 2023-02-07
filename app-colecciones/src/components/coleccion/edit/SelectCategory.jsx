import React, { useState } from 'react';

export const SelectCategory = ({categories, handleInputChange, category, setCategories}) => {
    const [newCategory, setNewCategory] = useState('');

    const handleNewCategory = (e) => {
        e.preventDefault();
        if(newCategory.trim() !== '') {
            setCategories([...categories, newCategory]);
        }
        setNewCategory('');
    }

    return (
        <div className="inputBox">
            <div className='selectCategory'>
                <button type="button" className="list_btn">{category}</button>
                <span className="button_arrow"></span>
                <div className="option_container">
                    {categories.map((categorie, idx) => (
                        <label key={idx} className="option_field">
                            <input
                                onClick={handleInputChange}
                                className="list_option"
                                type="radio"
                                name="category"
                                value={categorie}
                            />{categorie}
                            <span className="checkmark"></span>
                        </label>
                    ))}
                </div>
            </div>
            <div className="btns" style={{alignItems:'center'}}>
                <input placeholder='Categoría' type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} name="" id="" />
                <button onClick={handleNewCategory} className='btn' type="button">
                    <span><i className="fa-solid fa-plus"></i> categoría</span>
                    <span><i className="fa-solid fa-plus"></i> categoría</span>
                </button>
            </div>
        </div>
    )
}
