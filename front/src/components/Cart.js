import React from 'react';

const Cart = ({baskets,pushBasketAction,popBasketAction,ele}) => {
  return (
    <div>
      <div>{ele.title}</div>
      <img src={ele.coverImage} height='100px' width='100px' ></img>
      <span>{ele.price}원</span>
    </div>
  );
};

export default Cart;