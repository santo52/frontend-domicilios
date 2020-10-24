import React from 'react';
import { MenuContainer, Title } from './styles';
import Hamburguer from './hamburguer';

function Menu({ items }) {
    return (
        <MenuContainer>
          <Hamburguer items={items} />
          <Title>Sistema de domicilios</Title>
        </MenuContainer>
    );
}

export default Menu;


