import React from 'react';

const Product = ({item,popBasketAction,pushBasketAction}) => {

  return (
    <div>
      <div>{item.title}</div>
      <img src={item.coverImage} height='100px' width='100px' ></img>
      <span>{item.price}원</span>
      <button onClick={()=>pushBasketAction({product:item})}>담기</button>
      <button onClick={()=>popBasketAction({id:item.id})}>빼기</button>
    </div>
  );
};

export default Product;