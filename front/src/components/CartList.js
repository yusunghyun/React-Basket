import React from 'react';
import Cart from './Cart.js';
import { NavLink } from 'react-router-dom';

const CartList = ({baskets,pushBasketAction,popBasketAction,coupons}) => {
  console.log(coupons)
  return (
    <div>
      <div>
        <NavLink to='/products'>돌아가기</NavLink>
      </div>
      <div>
        {
          baskets.map( (ele,index) =>(
            <Cart key={index} ele={ele.product} baskets={baskets} pushBasketAction={pushBasketAction} popBasketAction={popBasketAction}/>
          ))
        }
      </div>
      <div>
        {coupons.map((ele,idx)=>(
        <ul key={idx}>
          <li>{ele.type}</li>
          <li>{ele.title}</li>
          <li>{ele.discountRate}</li>
        </ul>
        ))}
        
      </div>
    </div>
  );
};

export default CartList;