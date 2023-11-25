// HomePage.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Counter } from '../containers/counter';
import { Counter2 } from '../containers/counter_2';
import { logout } from '../reducers/login';

const HomePage = () => {
    const dispatch = useDispatch()

    return (
        <div className="App">
            <header className="App-header">
                <h1>Redux Test</h1>
            </header>
            <main>
                <Counter></Counter>
                <Counter2></Counter2>
                <br />
                <button onClick={() => dispatch(logout())}>Logout!!</button>
                <br />
                <Link to='/Test'>Test</Link>
            </main>
        </div>
    )
};

export default HomePage;
