import React from 'react';

export const Footer = () => {
    return (
        <footer>
            <div className="group1">
                <div className="box">
                    <figure>
                        <a href="#">
                            <img src="https://static-cse.canva.com/_next/static/assets/logo_w2000xh641_3b021976d60d0277e95febf805ad9fe8c7d6d54f86969ec03b83299084b7cb93.png" alt="Logo del sitio" />
                        </a>
                    </figure>
                </div>
                <div className="box">
                    <h2>Sobre nosotros</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, at.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, at.</p>
                </div>
                <div className="box">
                    <h2>Siguenos</h2>
                    <div className="redSocial">
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-github"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            <div className="group2">
                <small>&copy; 2023 <b>GatoSM</b> - Todos los derechos reservados</small>
            </div>
        </footer>
    )
}
