import React from 'react';
import Product from './Product.js'

const ProductList = ({result,baskets,popBasketAction,pushBasketAction}) => {



  return (
    <div>
      {
        result.map( (item,index) =>(
          <Product key={index} item={item} baskets={baskets} pushBasketAction={pushBasketAction} popBasketAction={popBasketAction}/>
        ))
      }
    </div>
  );
};

export default ProductList;