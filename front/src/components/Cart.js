import React from 'react';

const Cart = ({baskets,pushBasketAction,popBasketAction,ele}) => {
  return (
    <div>
      <button type='button'>선택</button>
      <img src={ele.coverImage} height='100px' width='100px' ></img>
      <span>{ele.title}</span>
      <span>{ele.price}원</span>
    </div>
  );
};

export default Cart;