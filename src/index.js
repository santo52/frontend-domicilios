import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from 'react-dom';
import Header from './components/header/index';
import Main from './components/main/index';
import themes from './themes/index';
import Routes from './routes';
import './css/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
    return (
        <ThemeProvider theme={themes('main')}>
            <Router>
                <Header />
                <Main>
                  <Routes />
                </Main>
            </Router>
        </ThemeProvider>
    );
}

render(
    <App />,
    document.getElementById('app')
);
