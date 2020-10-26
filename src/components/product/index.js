import React from 'react';

import { ProductContainer } from './styles'

function formatMoney(number, decPlaces, decSep, thouSep) {
  decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
  decSep = typeof decSep === "undefined" ? "," : decSep;
  thouSep = typeof thouSep === "undefined" ? "." : thouSep;
  var sign = number < 0 ? "-" : "";
  var i = String(parseInt(number = Math.abs(Number(number) || 0).toFixed(decPlaces)));
  var j = (j = i.length) > 3 ? j % 3 : 0;

  return '$ ' + sign +
    (j ? i.substr(0, j) + thouSep : "") +
    i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep) +
    (decPlaces ? decSep + Math.abs(number - i).toFixed(decPlaces).slice(2) : "");
}


function Product({ src, name, description, addAction, price }) {



    return (
      <ProductContainer>
        <a>
          <div className="product-figure">
            <img src={src} />
          </div>
          <div>
            <div className="product-title">{name}</div>
            <div className="product-desc">{description}</div>
          </div>
          <div className="product-price-container" onClick={addAction} >
            <span className="product-price">{formatMoney(price, 0)}</span>
            <span className="product-add">+</span>
          </div>
        </a>
      </ProductContainer>
    );
}

export default Product;
