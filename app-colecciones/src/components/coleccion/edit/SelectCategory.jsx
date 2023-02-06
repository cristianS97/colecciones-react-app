import React from 'react';

export const SelectCategory = ({categories, handleInputChange, category}) => {
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
        </div>
    )
}
