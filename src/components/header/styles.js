import React from 'react';
import styled from 'styled-components';

export const Navbar = styled.div.attrs({
    className: 'flex'
})`
  background: ${({ theme }) => theme.colors.orange };
  width: 100%;
  min-height: 60px;
`;
