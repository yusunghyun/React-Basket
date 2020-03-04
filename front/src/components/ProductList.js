import React from 'react';
import Product from './Product.js'

const ProductList = ({result}) => {
  
  return (
    <div>
      {
        result.map( (item,index) =>(
          <Product key={index} item={item}/>
        ))
      }
    </div>
  );
};

export default ProductList;