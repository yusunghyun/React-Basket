import React from 'react';

const Cart = ({baskets,pushBasketAction,popBasketAction,ele,price,plusBasketAction,minusBasketAction}) => {
  const [clickOn,setClickOn] = React.useState(false)
  const basketClick = React.useCallback(()=>{
    if(!clickOn){
      plusBasketAction(ele.price)
      setClickOn(true)
    }
    else {
      minusBasketAction(ele.price)
      setClickOn(false)
    }
  },[clickOn])
  return (
    <div>
      <button type='button' onClick={basketClick}>선택</button>
      <img src={ele.coverImage} height='100px' width='100px' ></img>
      <span>{ele.title}</span>
      <span>{ele.price}원</span>
    </div>
  );
};

export default Cart;