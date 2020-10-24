import React, { useState } from 'react'
import { HamburguerButton, HamburguerIcon, HamburguerList, HamburguerListContainer } from './styles';

function Hamburguer() {
  const [active, setActive] = useState(true)
  return (
    <>
      <HamburguerButton active={active} onClick={() => setActive(active => !active)}>
        <HamburguerIcon />
      </HamburguerButton>
      <HamburguerList active={active}>
        <HamburguerOption active>Card</HamburguerOption>
        <HamburguerOption>Home</HamburguerOption>
        <HamburguerOption>Carreers</HamburguerOption>
        <HamburguerOption>Contact</HamburguerOption>
        <HamburguerOption>Menu</HamburguerOption>
      </HamburguerList>
    </>
  )
}

function HamburguerOption({ children, ...props }) {
    return <HamburguerListContainer {...props}><a>{children}</a></HamburguerListContainer>
}

export default Hamburguer
