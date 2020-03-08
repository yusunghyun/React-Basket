import React from 'react';
import Cart from './Cart.js';
import { NavLink } from 'react-router-dom';

const CartList = ({baskets,coupons,useCoupon,payment,plusBasketAction,minusBasketAction,}) => {
  const [couponList,setCouponList] = React.useState([])
  const [price,setPrice] = React.useState(0);
  const [discount,setDiscount] = React.useState(0);
  const [canDiscountPrice, setCanDiscountPrice] = React.useState(0);
   
  const couponClick = React.useCallback(()=>{
    if(!couponList.length){
      { 
        let arr = coupons.map((ele,idx)=>(
          <button key={idx} onClick={()=>{
            console.log(ele)
            return setDiscount(ele.discountAmount||canDiscountPrice*ele.discountRate/100)
          }}>{ele.title}</button>
        ))
        arr.push(<button key={arr.length} onClick={()=>{
          return setDiscount(0)
        }}>선택 안함</button>)
        setCouponList(arr)
        
      }
    }
    else setCouponList([])
  })
  React.useEffect(()=>{
    if(payment.length>1){
      let a = 0
      let b = 0
      for(let i = 0; i < payment.length; i++){
        a+=payment[i].price
        if(payment[i].availableCoupon !== false) b+=payment[i].price
      }
      setPrice(a)
      setCanDiscountPrice(b)
    }
    else if(payment.length===1){
      setPrice(payment[0].price) 
      if(!payment[0].availableCoupon) setCanDiscountPrice(payment[0].price)
    }
    else{
      setPrice(0)
      setCanDiscountPrice(0)
    }
  },[payment])
  
  return (
    <div>
      <div>
        <NavLink to='/products'>돌아가기</NavLink>
      </div>
      <div>
        {
          baskets.map( (ele,index) =>(
            <Cart key={index} ele={ele.product} baskets={baskets}
            payment={payment} plusBasketAction={plusBasketAction} minusBasketAction={minusBasketAction}/>
          ))
        }
      </div>
      <div>
        <button onClick={couponClick}>쿠폰선택</button>
        <div>
          {
            couponList
          }
        </div>
        
      </div>
      <div>
        <div>결제금액</div>
        <div>도서 산간지역은 추가 배송료가 적용될 수 있습니다</div>
        <div>총 상품 금액<span>{price}원</span></div>
        <div>할인 금액<span>{discount}원</span></div>
        <div>최종가격<span>{price-discount}원</span></div>
        <button>결제하기</button>
      </div>
    </div>
  );
};

export default CartList;