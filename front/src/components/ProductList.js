import React, { useState } from 'react';
import Product from './Product.js'
import {NavLink} from 'react-router-dom'
import Pagination from 'react-js-pagination'
import '../App.css'

const ProductList = ({result,baskets,popBasketAction,pushBasketAction,minusBasketAction}) => {
  const [activePage,setActivePage] = useState(1)
  const handlePageChange = (pageNumber)=>{
    setActivePage(pageNumber)
  }
  return (
    <div>
      <NavLink to='/cart'>장바구니!!</NavLink>
      <div>
      {
        result.slice(5*activePage-5,5*activePage).map( (item,index) =>(
          <Product key={index} item={item} baskets={baskets} pushBasketAction={pushBasketAction} popBasketAction={popBasketAction} minusBasketAction={minusBasketAction}/>
        ))
      }
      </div>
      <div>
        <Pagination
          itemClass='im'
          linkClass='lk'
          activePage={activePage}
          itemsCountPerPage={5}
          totalItemsCount={result.length}
          pageRangeDisplayed={5}
          onChange={handlePageChange.bind(this)}
        />
      </div>
    </div>
  );
};

export default ProductList;