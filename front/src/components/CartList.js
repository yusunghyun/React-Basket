import React from 'react';
import Cart from './Cart.js';
import { NavLink } from 'react-router-dom';
import '../App.css'
import {MdUndo} from 'react-icons/md'


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
  const pay = React.useCallback(()=>{
    if(!payment.length) alert('최소 1개 선택하셔야 합니다')
    else alert('결제 준비 중...')
  })
  return (
    <div>
      <div>
        <NavLink to='/products'><MdUndo className='basicon'/></NavLink>
      </div>
        
      <div className='cart'>
        <div>
          {
            baskets.map( (ele,index) =>(
              <Cart key={index} ele={ele.product} baskets={baskets}
              payment={payment} plusBasketAction={plusBasketAction} minusBasketAction={minusBasketAction}/>
            ))
          }
        </div>
        <div>
          <div onClick={couponClick}>쿠폰선택</div>
          <div>
            {
              couponList
            }
          </div>
          
        </div>
        <div>
          <div className='pp'>결제금액</div>
          <div >도서 산간지역은 추가 배송료가 적용될 수 있습니다</div>
          <div className='pp2'><div>총 상품 금액<span>{price}원</span></div></div>
          <div className='pp2'><div>할인 금액<span>{discount}원</span></div></div>
          <div className='pp2'><div>최종가격<span>{price-discount < 0 ? 0 : price-discount}원</span></div></div>
          <button onClick={pay}  className='pp3'>결제하기</button>
        </div>
      </div>
    </div>
  );
};

export default CartList;