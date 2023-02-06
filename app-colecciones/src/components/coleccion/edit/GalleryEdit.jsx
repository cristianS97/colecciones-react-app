import React from 'react';

export const GalleryEdit = ({image, idx, handleImageChange, handleTextChange, handleCheckChange, checkedState}) => {
    return (
        <div className="row" key={idx}>
            <div className="col">
                <img
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
    )
}
