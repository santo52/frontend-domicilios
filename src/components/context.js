import React from 'react';

const Context = React.createContext({
    cartItems: parseInt(localStorage.getItem('cartItems'))
});

export default Context;
