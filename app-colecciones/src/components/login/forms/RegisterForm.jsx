// React
import React, { useState } from 'react';

export const RegisterForm = () => {
    const [registerInfo, setRegisterInfo] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
    });

    const [registerPassword, setregisterPassword] = useState('password');
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState('password');

    const changeRegisterPasswordType = () => setregisterPassword(registerPassword === 'password' ? 'text' : 'password');
    const changeRegisterConfirmPasswordType = () => setRegisterConfirmPassword(registerConfirmPassword === 'password' ? 'text' : 'password');

    const handleInputChange = (e) => {
        setRegisterInfo({
            ...registerInfo,
            [e.target.name]: e.target.value
        });
    }

    return (
        <form action="">
            <h3>Registro</h3>
            <div className="inputBox">
                <input
                    type="text"
                    name='name'
                    value={registerInfo.name}
                    onChange={handleInputChange}
                    required
                />
                <i>Nombre</i>
            </div>
            <div className="inputBox">
                <input
                    type="email"
                    name='email'
                    value={registerInfo.email}
                    onChange={handleInputChange}
                    required
                />
                <i>Correo</i>
            </div>
            <div className="inputBox">
                <input
                    type={registerPassword}
                    name='password'
                    value={registerInfo.password}
                    onChange={handleInputChange}
                    required
                />
                <i>Contraseña</i>
                <span
                    onClick={changeRegisterPasswordType}
                    className={registerPassword !== 'password' ? 'hide' : ''}
                ></span>
            </div>
            <div className="inputBox">
                <input
                    type={registerConfirmPassword}
                    name='passwordConfirm'
                    value={registerInfo.passwordConfirm}
                    onChange={handleInputChange}
                    required
                />
                <i>Confirme contraseña</i>
                <span
                    onClick={changeRegisterConfirmPasswordType}
                    className={registerConfirmPassword !== 'password' ? 'hide' : ''}
                ></span>
            </div>
            <input type="submit" value="Registrar" />
        </form>
    )
}
