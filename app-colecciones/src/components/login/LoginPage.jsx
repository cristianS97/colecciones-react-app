// React
import React, { useState } from 'react';
// react router
import { Link } from "react-router-dom";

export const LoginPage = () => {
    const [toggleForm, setToggleForm] = useState('');

    const toggleMenu = (e) => {
        e.preventDefault();
        if(toggleForm === '') {
            setToggleForm('active');
        } else {
            setToggleForm('');
        }
    }

    return (
        <section className={'loginForm ' + toggleForm}>
            <div className={'container ' + toggleForm}>

                <div className='user signinBox'>
                    <div className="imgBox">
                        <img src="https://images.pexels.com/photos/3127155/pexels-photo-3127155.jpeg" alt="" />
                    </div>
                    <div className="formBox">
                        <form action="">
                            <h2>Login</h2>
                            <input type="text" placeholder='Correo' />
                            <input type="password" placeholder='Contraseña' name="" id="" />
                            <input type="submit" value="Ingresar" />
                            <p className="signUp">No tienes cuenta? <Link onClick={toggleMenu}>Registrate</Link></p>
                        </form>
                    </div>
                </div>

                <div className='user signupBox'>
                    <div className="formBox">
                        <form action="">
                            <h2>Registro</h2>
                            <input type="text" placeholder='Nombre' />
                            <input type="text" placeholder='Correo' />
                            <input type="password" placeholder='Contraseña' name="" id="" />
                            <input type="password" placeholder='Confirme contraseña' name="" id="" />
                            <input type="submit" value="Registrar" />
                            <p className="signUp">Ya tienes cuenta? <Link onClick={toggleMenu}>Ingresa</Link></p>
                        </form>
                    </div>
                    <div className="imgBox">
                        <img src="https://images.pexels.com/photos/3993270/pexels-photo-3993270.jpeg" alt="" />
                    </div>
                </div>

            </div>
        </section>
    )
}
