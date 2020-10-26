import styled, { css } from 'styled-components';
import { device } from '../device';
const headerHeight = 45;

const hamburguerActive = css`
  span {
        transform: rotate(360deg);
        &:before,
        &:after {
            top: 0;
            width: 15px;
        }

        &:before {
            transform: rotate3d(0, 0, 1, -40deg);
        }

        &:after {
            transform: rotate3d(0, 0, 1, 40deg);
        }
    };
`

const activeColorList = `
    color: #fff;
    background: orange;
`

export const MenuContainer = styled.div`
    height: ${headerHeight}px;
    top: 0;
    left: 0;
    width: 100%;
    position: fixed;
    z-index: 9999;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid orange;
    background: #fff;
`;

export const Title = styled.div`
    display: inline-block;
    text-align: center;
    font-weight: 600;
    width: 100%;

    @media ${device.tablet} {
      padding-left: 15px;
      text-align: left;
    }

`;

export const HamburguerButton = styled.button`
    display: inline-block;
    height: 100%;
    background: none;
    border: none;
    outline: 0;
    cursor: pointer;
    ${props => (props.active ? hamburguerActive : '')};
    @media ${device.tablet} {
      display: none;
    }
`

export const HamburguerListContainer = styled.li`
    a {
      display: block;
      margin-top: 5px;
      width: 100%;
      height: 100%;
      padding: 15px;
      cursor: pointer;
      text-decoration: none;
      color: #000;
      ${props => props.active ? activeColorList : ''}
      &:hover {
        ${activeColorList}
      }

      @media ${device.tablet} {
        margin: 0;
      }
    }

`

export const HamburguerList = styled.ul`
    position: fixed;
    margin: 0;
    padding: 15px 0;
    margin-top: ${headerHeight}px;
    top: 0;
    left: 0;
    width: 300px;
    height: calc(100vh - ${headerHeight}px);
    z-index: 9999;
    background: #fff;
    transition: .3s left ease;
    left: ${props => props.active ? 0 : '-100%'};
    box-shadow: 1px 1px 5px 1px #e7e7e7;
    list-style: none;

    @media ${device.tablet} {
        position: static;
        width: auto;
        display: flex;
        height: auto;
        padding: 0;
        margin: 0;
        box-shadow: none;
        height: 100%;
    }


`

export const HamburguerIcon = styled.span`

    position: relative;
    display: block;
    margin: auto;
    z-index: 10000;
    transition: .3s all ease;
    transform: rotate(180deg);

    &,
    &:before,
    &:after {
        width: 24px;
        height: 4px;
        background-color: #2b2c2f;
        backface-visibility: hidden;
        border-radius: 2px;
    }

    &:before,
    &:after {
        content: "";
        position: absolute;
        left: 0;
        top: -8px;
        transition: .3s all ease;
        transform-origin: 1.71429px center;
    }

    &:after {
        top: 8px;
    }
`

export const Cart = styled.div`
    width: 40px;
    margin: 10px;
    margin-right: 20px;
    cursor:pointer;
    position: relative;
    &:before {
      content: "${props => props.size}";
      width: 15px;
      height: 15px;
      background-color:${props => props.size ? 'tomato' : 'white'};
      display:block;
      border-radius:50%;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight:600;
      font-size: .7rem;
      position: absolute;
      right: 0;
    }
    img {
      height:100%;
    }
`;
