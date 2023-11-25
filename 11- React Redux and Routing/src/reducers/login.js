import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isAuthenticated: false
};

const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: (state) => {
            state.isAuthenticated = true;
            console.log("AUTENTICOOO!!")
        },
        logout: (state) => {
            state.isAuthenticated = false;
            console.log("USCITAAA")
        }
    }
});


export const { login, logout } = LoginSlice.actions;
export const selectLogin = (state) => state.login.isAuthenticated;



export default LoginSlice


