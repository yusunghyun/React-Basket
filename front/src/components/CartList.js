import React from 'react';
import Cart from './Cart.js';
import Coupons from './Coupons.js'
import { NavLink } from 'react-router-dom';

const CartList = ({baskets,pushBasketAction,popBasketAction,coupons,payment,plusBasketAction,minusBasketAction}) => {
  const [couponList,setCouponList] = React.useState([])
  const [price,setPrice] = React.useState(0);
  React.useEffect(()=>{
    if(payment.length>1){
      let a = 0
      for(let i = 0; i < payment.length; i++){
        a+=payment[i].price
      }
      setPrice(a)
    }
    else if(payment.length===1){
      setPrice(payment[0].price) 
    }
    else setPrice(0)
  },[payment])
  const couponClick = React.useCallback(()=>{
    if(!couponList.length){
      {
        setCouponList(coupons.map((ele,idx)=>(
          <Coupons key={idx} type={ele.type} title={ele.title} discount={ele.discountRate || ele.discountAmount}/>)))
      }
    }
    else setCouponList([])
  })
  return (
    <div>
      <div>
        <NavLink to='/products'>돌아가기</NavLink>
      </div>
      <div>
        {
          baskets.map( (ele,index) =>(
            <Cart key={index} ele={ele.product} baskets={baskets} pushBasketAction={pushBasketAction} popBasketAction={popBasketAction}
            payment={payment} plusBasketAction={plusBasketAction} minusBasketAction={minusBasketAction}/>
          ))
        }
      </div>
      <div>
        <button onClick={()=>couponClick()}>쿠폰선택</button>
        <div>
          {couponList}
        </div>
      </div>
      <div>
        <div>결제금액</div>
        <div>도서 산간지역은 추가 배송료가 적용될 수 있습니다</div>
        <div>총 상품 금액<span>{price}원</span></div>
        <div>할인 금액<span>{}원</span></div>
        <div>최종가격<span>{}원</span></div>
        <button>결제하기</button>
      </div>
    </div>
  );
};

export default CartList;