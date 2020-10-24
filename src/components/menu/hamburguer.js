import React, { useState } from 'react'
import { HamburguerButton, HamburguerIcon, HamburguerList, HamburguerListContainer } from './styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Hamburguer({ items }) {
  const [active, setActive] = useState(true)
  return (
    <>
      <HamburguerButton active={active} onClick={() => setActive(active => !active)}>
        <HamburguerIcon />
      </HamburguerButton>
      <HamburguerList active={active}>
        {(items || []).map(item => (
          <HamburguerOption key={JSON.stringify(item)} {...item} />
        ))}
      </HamburguerList>
    </>
  )
}

function HamburguerOption({ name, href, ...props }) {
    return <HamburguerListContainer {...props}><Link to={href}>{name}</Link></HamburguerListContainer>
}

export default Hamburguer
