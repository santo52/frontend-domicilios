import React from 'react';
import { MenuContainer, Title } from './styles';
import Hamburguer from './hamburguer';

function Menu() {
    return (
        <MenuContainer>
          <Hamburguer />
          <Title>Sistema de domicilios</Title>
        </MenuContainer>
    );
}

export default Menu;


