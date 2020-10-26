import React, { useState, useEffect, useContext } from 'react'
import { Cart, HamburguerButton, HamburguerIcon, HamburguerList, HamburguerListContainer, Title } from './styles';
import { useLocation, Link } from "react-router-dom";
import Context from '../context';
import cart from '../cart.svg'

function Hamburguer({ items, title }) {
  const { cartItems } = useContext(Context);
  const [active, setActive] = useState(true)

  return (
    <>
      <HamburguerButton active={active} onClick={() => setActive(active => !active)}>
        <HamburguerIcon />
      </HamburguerButton>
      <Title>{title}</Title>
      <HamburguerList active={active}>
        {(items || []).map(item => (
          <HamburguerOption key={item.href} {...item} />
        ))}
        <Cart size={cartItems} >
          <img src={cart} />
        </Cart>
      </HamburguerList>
    </>
  )
}

function HamburguerOption({ name, href, ...props }) {
    const location = useLocation()
    const [active, setActive] = useState(false)
    useEffect(() => setActive(href === location.pathname), [location])

    return <HamburguerListContainer {...props} active={active} ><Link to={href}>{name}</Link></HamburguerListContainer>
}

export default Hamburguer
