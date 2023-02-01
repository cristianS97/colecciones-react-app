// React
import React, { useState } from 'react';
// react router
import { Link } from "react-router-dom";

export const LoginPage = () => {
    const [toggleForm, setToggleForm] = useState('');
    const [loginPassword, setLoginPassword] = useState('password');
    const [registerPassword, setregisterPassword] = useState('password');
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState('password');

    const changeLoginPasswordType = () => setLoginPassword(loginPassword === 'password' ? 'text' : 'password');
    const changeRegisterPasswordType = () => setregisterPassword(registerPassword === 'password' ? 'text' : 'password');
    const changeRegisterConfirmPasswordType = () => setRegisterConfirmPassword(registerConfirmPassword === 'password' ? 'text' : 'password');

    const toggleMenu = (e) => {
        e.preventDefault();
        setToggleForm(toggleForm === '' ? 'active' : '');
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
                            <div className="inputBox">
                                <input type="email" required />
                                <i>Correo</i>
                            </div>
                            <div className="inputBox">
                                <input type={loginPassword} name="" id="" required />
                                <i>Contraseña</i>
                                <span
                                    onClick={changeLoginPasswordType}
                                    className={loginPassword !== 'password' ? 'hide' : ''}
                                ></span>
                            </div>
                            <input type="submit" value="Ingresar" />
                            <p className="signUp">No tienes cuenta? <Link onClick={toggleMenu}>Registrate</Link></p>
                        </form>
                    </div>
                </div>

                <div className='user signupBox'>
                    <div className="formBox">
                        <form action="">
                            <h2>Registro</h2>
                            <div className="inputBox">
                                <input type="text" required />
                                <i>Nombre</i>
                            </div>
                            <div className="inputBox">
                                <input type="text" required />
                                <i>Correo</i>
                            </div>
                            <div className="inputBox">
                                <input type={registerPassword} required />
                                <i>Contraseña</i>
                                <span
                                    onClick={changeRegisterPasswordType}
                                    className={registerPassword !== 'password' ? 'hide' : ''}
                                ></span>
                            </div>
                            <div className="inputBox">
                                <input type={registerConfirmPassword} required />
                                <i>Confirme contraseña</i>
                                <span
                                    onClick={changeRegisterConfirmPasswordType}
                                    className={registerConfirmPassword !== 'password' ? 'hide' : ''}
                                ></span>
                            </div>
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
