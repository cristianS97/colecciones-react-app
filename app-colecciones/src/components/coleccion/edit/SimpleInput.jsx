import React from 'react';

export const SimpleInput = ({value, handleInputChange, name, label}) => {
    return (
        <div className="inputBox">
            <input
                value={value}
                onChange={handleInputChange}
                type="text"
                name={name}
                required
            />
            <i>{label}</i>
        </div>
    )
}
