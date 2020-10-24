import React from 'react';
import Menu from '../menu';
import { menuItems } from '../../routes'

function Header() {
    return (
      <Menu items={menuItems}/>
    );
}

export default Header;


