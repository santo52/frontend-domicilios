import React from 'react';
import { MenuContainer, Title } from './styles';
import Hamburguer from './hamburguer';

function Menu({ items }) {
    return (
        <MenuContainer>
          <Hamburguer items={items} title="Sistema de domicilios"/>
        </MenuContainer>
    );
}

export default Menu;


