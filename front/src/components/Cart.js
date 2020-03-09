import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
const Cart = ({baskets,useCoupon,ele,payment,plusBasketAction,minusBasketAction}) => {
  const [clickOn,setClickOn] = React.useState(Array.from(payment).some((el,idx)=>el.id === ele.id)?true:false)
  const basketClick = ()=>{
    if(Array.from(payment).some((el,idx)=>el.id === ele.id)){
      minusBasketAction(ele)
      setClickOn(false)
    }
    else {
      plusBasketAction(ele)
      setClickOn(true)
    }
  }
  return (
    <div>
      <button type='button' onClick={basketClick}>{clickOn ? <MdCheckBox/>:<MdCheckBoxOutlineBlank/>}</button>
      <img src={ele.coverImage} height='100px' width='100px' ></img>
      <span>{ele.title}</span>
      <span>{ele.price}원</span>
    </div>
  );
};

export default Cart;