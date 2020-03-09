import React from 'react';
import Product from './Product.js'
import {NavLink} from 'react-router-dom'

const ProductList = ({result,baskets,popBasketAction,pushBasketAction,minusBasketAction}) => {
  return (
    <div>
      <NavLink to='/cart'>장바구니!!</NavLink>

      {
        result.map( (item,index) =>(
          <Product key={index} item={item} baskets={baskets} pushBasketAction={pushBasketAction} popBasketAction={popBasketAction} minusBasketAction={minusBasketAction}/>
        ))
      }
    </div>
  );
};

export default ProductList;