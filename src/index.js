import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from 'react-dom';
import Header from './components/header/index';
import Main from './components/main/index';
import Context from './components/context';
import themes from './themes/index';
import Routes from './routes';
import './css/styles';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

function App() {

    const [ cartItems, setCartItems ] = useState(parseInt(localStorage.getItem('cartItems')) || 0 );

    return (
        <ThemeProvider theme={themes('main')}>
            <Context.Provider value={{ cartItems, setCartItems}}>
                <Router>
                    <Header />
                    <Main>
                        <Routes />
                    </Main>
                </Router>
            </Context.Provider>
        </ThemeProvider>
    );
}

render(
    <App />,
    document.getElementById('app')
);
