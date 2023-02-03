// React
import React, { useState } from 'react';
// React router dom
import { Link } from 'react-router-dom';

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
        <section className={`loginForm ${toggleForm}`}>
            <div className="containerForm">
                <div className="blueBg">
                    <div className="box signin">
                        <h2>Ya tienes una cuenta?</h2>
                        <button onClick={toggleMenu} className="signinBtn">Iniciar sesión</button>
                    </div>
                    <div className="box signup">
                        <h2>No tienes cuenta?</h2>
                        <button onClick={toggleMenu} className="signupBtn">Registrate</button>
                    </div>
                </div>
                <div className={`formBox ${toggleForm}`}>
                    <div className="form signin">
                        <form action="">
                            <h3>Login</h3>
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
                            <Link className='forgot'>Olvidaste tu contraseña?</Link>
                        </form>
                    </div>
                    <div className="form signup">
                        <form action="">
                            <h3>Registro</h3>
                            <div className="inputBox">
                                <input type="text" required />
                                <i>Nombre</i>
                            </div>
                            <div className="inputBox">
                                <input type="email" required />
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
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
