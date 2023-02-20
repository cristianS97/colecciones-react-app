import React, { useReducer } from 'react';
import { authContext } from '../context/authContext';
import authReducer from '../reducer/authReducer';
import { types } from '../types/types';

const AuthState = (props) => {
    const initialState = {
        logged: false
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    const initiLogin = (userData) => {
        dispatch({
            type: types.login,
            payload: userData
        })
    }

    return (
        <authContext.Provider value={{
            initiLogin
        }}>
            {props.children}
        </authContext.Provider>
    );
}

export default AuthState;