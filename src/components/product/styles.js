import styled from 'styled-components';
import { device } from '../device'

export const ProductContainer = styled.div`
    display: inline-block;
    padding: 10px;
    width: 100%;

    @media ${device.mobileL} {
      width: 50%;
    }

    @media ${device.tablet} {
      width: 33.3333333%;
    }

    @media ${device.laptop} {
      width: 25%;
    }

    @media ${device.laptopL} {
      width: 20%;
    }

    @media ${device.desktop} {
      width: 16.66666666%;
    }

  .product-figure {
    width: 100%;
    position: relative;
    margin-bottom: 15px;
    float: left;
    img {
      width: 100%;
      float: left;
      overflow: hidden;
      max-height: 150px;
      object-fit: cover;
      border-radius: 4px;
    }
  }

  .product-title {
    font-size: 1.167em;
    color: #273239;
    line-height: 1.250em;
    margin: 0 0 5px;
    font-family: 'Lato';
    font-weight: normal;
  }

  .product-desc {
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #A9B1B7;
    font-style: normal;
  }

  .product-price-container {
    margin-top: 15px;
    cursor: pointer;
    .product-price {
      float: left;
      font-size: 1.167em;
      color: #273239;
    }

    .product-add {
      width: 22px;
      height: 24px;
      position: relative;
      float: left;
      font-size: 0;
      background: url(https://live.pystatic.com/webassets/profile/add-button-63e98ca38b47cd1b5a247c0a3334e075.svg) no-repeat 0 -97px;
      top: -2px;
      left: 10px;
      &:before {
          width: 24px;
          height: 24px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          background: url(https://live.pystatic.com/webassets/profile/add-button-63e98ca38b47cd1b5a247c0a3334e075.svg) no-repeat 0 -21px;
          content: '';
          opacity: 0;
          transform: scale(0);
          transition: all 0.1s ease-in-out;
      }
    }
  }

`
