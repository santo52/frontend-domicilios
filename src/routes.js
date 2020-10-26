import React from 'react';
import Cart from './modules/cart';
import Home from './modules/home';
import Login from './modules/login';
import Register from './modules/register';
import Menu from './modules/menu';

import { Switch, Route } from 'react-router-dom';

export const menuItems = [
    {
        name: 'Inicio',
        component: Home,
        href: '/',
    },
    {
        name: 'Ingreso',
        component: Login,
        href: '/ingreso',
    },
    {
        name: 'Registro',
        component: Register,
        href: '/registro',
    },
];

function Routes() {
    return <Switch>{ menuItems.map(item => <Route key={item.href} exact path={item.href} component={item.component} />)}</Switch>;
}

export default Routes;
