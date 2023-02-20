import React, { useState } from 'react'

export const RegisterForm = () => {
    const [registerPassword, setregisterPassword] = useState('password');
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState('password');

    const changeRegisterPasswordType = () => setregisterPassword(registerPassword === 'password' ? 'text' : 'password');
    const changeRegisterConfirmPasswordType = () => setRegisterConfirmPassword(registerConfirmPassword === 'password' ? 'text' : 'password');

    return (
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
    )
}
