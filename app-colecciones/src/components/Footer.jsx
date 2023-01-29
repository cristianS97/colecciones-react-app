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
            </div>
            <div className="group3">
                <div className="box">
                    <h2>Siguenos</h2>
                    <div className="redSocial">
                        <ul>
                            <li className='facebook'><a className='facebook' href="#"><i className="fa-brands fa-facebook"></i></a></li>
                            <li className='twitter'><a className='twitter' href="#"><i className="fa-brands fa-twitter"></i></a></li>
                            <li className='github'><a className='github' href="#"><i className="fa-brands fa-github"></i></a></li>
                            <li className='whatsapp'><a className='whatsapp' href="#"><i className="fa-brands fa-whatsapp"></i></a></li>
                            <li className='instagram'><a className='instagram' href="#"><i className="fa-brands fa-instagram"></i></a></li>
                            <li className='youtube'><a className='youtube' href="#"><i className="fa-brands fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="group2">
                <small>&copy; 2023 <b>GatoSM</b> - Todos los derechos reservados</small>
            </div>
        </footer>
    )
}
