// React
import React, { useState, useContext, useEffect } from 'react';
// React router dom
import { useNavigate } from 'react-router-dom';
// mis importaciones
import { authContext } from '../../reducer/context/authContext';
import { LoginForm } from './forms/LoginForm';
import { RegisterForm } from './forms/RegisterForm';

export const LoginPage = () => {
    const loginContext = useContext(authContext);
    const { state } = loginContext;
    const navigate = useNavigate();

    const [toggleForm, setToggleForm] = useState('');
    const toggleMenu = (e) => {
        e.preventDefault();
        setToggleForm(toggleForm === '' ? 'active' : '');
    }

    useEffect(() => {
        if(state.logged) {
            navigate('/');
        }
    }, [loginContext, state, navigate]);

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
                        <LoginForm />
                    </div>
                    <div className="form signup">
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </section>
    )
}
