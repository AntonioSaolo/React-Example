import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../reducers/counter';
import LoginSlice from '../reducers/login';

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        login: LoginSlice.reducer
    },
});

