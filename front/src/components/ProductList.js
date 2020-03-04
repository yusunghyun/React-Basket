import React from 'react';
import Product from './Product.js'

const ProductList = ({result,popBasketAction,pushBasketAction}) => {



  
  return (
    <div>
      {
        result.map( (item,index) =>(
          <Product key={index} item={item} pushBasketAction={pushBasketAction} popBasketAction={popBasketAction}/>
        ))
      }
    </div>
  );
};

export default ProductList;