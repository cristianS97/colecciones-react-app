import React, { useContext, useState } from 'react';
// React router dom
import { Link } from 'react-router-dom';
// Mis importaciones
import { authContext } from '../../../reducer/context/authContext';

export const LoginForm = () => {
    const loginContext = useContext(authContext);
    const { initLogin } = loginContext;
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    });

    const [loginPassword, setLoginPassword] = useState('password');
    const changeLoginPasswordType = () => setLoginPassword(loginPassword === 'password' ? 'text' : 'password');

    const handleInputChange = (e) => {
        setLoginInfo({
            ...loginInfo,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(loginInfo.email.trim() !== '' && loginInfo.password.trim() !== '') {
            initLogin({...loginInfo, name:'pepe'});
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Login</h3>
            <div className="inputBox">
                <input
                    type="email"
                    name='email'
                    value={loginInfo.email}
                    onChange={handleInputChange}
                    required
                />
                <i>Correo</i>
            </div>
            <div className="inputBox">
                <input
                    type={loginPassword}
                    name='password'
                    value={loginInfo.password}
                    onChange={handleInputChange}
                    required
                />
                <i>Contraseña</i>
                <span
                    onClick={changeLoginPasswordType}
                    className={loginPassword !== 'password' ? 'hide' : ''}
                ></span>
            </div>
            <input type="submit" value="Ingresar" />
            <Link className='forgot'>Olvidaste tu contraseña?</Link>
        </form>
    )
}
