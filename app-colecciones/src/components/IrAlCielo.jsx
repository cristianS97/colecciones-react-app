import React from 'react';

export const IrAlCielo = ({active}) => {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`top-to-btm ${active}`} onClick={goToTop}>
            <i className="fa-solid fa-arrow-up"></i>
        </div>
    )
}
