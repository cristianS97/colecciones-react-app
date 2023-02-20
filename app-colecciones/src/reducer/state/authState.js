import React, { useReducer } from 'react';
import { authContext } from '../context/authContext';
import authReducer from '../reducer/authReducer';
import { types } from '../types/types';

const AuthState = (props) => {
    const initialState = {
        logged: false
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    const initLogin = (userData) => {
        dispatch({
            type: types.login,
            payload: userData
        });
    }

    return (
        <authContext.Provider value={{
            state,
            initLogin
        }}>
            {props.children}
        </authContext.Provider>
    );
}

export default AuthState;