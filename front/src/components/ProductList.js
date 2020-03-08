import React from 'react';
import Product from './Product.js'

const ProductList = ({result,baskets,popBasketAction,pushBasketAction,minusBasketAction}) => {
  return (
    <div>

      {
        result.map( (item,index) =>(
          <Product key={index} item={item} baskets={baskets} pushBasketAction={pushBasketAction} popBasketAction={popBasketAction} minusBasketAction={minusBasketAction}/>
        ))
      }
    </div>
  );
};

export default ProductList;