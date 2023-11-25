// LoginPage.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/login';

const LoginPage = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Login Page</h2>
            <button onClick={() => dispatch(login())}>Log In</button>
        </div>
    );
};

export default LoginPage;
