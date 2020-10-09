import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from 'react-dom';
import Header from './components/header/index';
import themes from './themes/index';
import './css/styles';

function App() {
    return (
        <ThemeProvider theme={themes('main')}>
            <main>
                <Header />
            </main>
        </ThemeProvider>
    );
}

render(
    <App />,
    document.getElementById('app')
);
