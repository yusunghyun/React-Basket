import React from 'react';
import {useSelector, useDispatch}  from 'react-redux'
import * as productModule from '../modules/Product'
import CartList from '../components/CartList';

const CartContainer = () => {

  const {baskets,coupons,payment,useCoupon} = useSelector(state=>{ //상태 꺼네오기
    return {
      ...state.productModule
    }
  })

  const dispatch = useDispatch()//국룰

  return (
    <CartList
      baskets={baskets}
      coupons={coupons}
      payment={payment}
      useCoupon={useCoupon}
      plusBasketAction={(pay)=>dispatch(productModule.plusBasketAction(pay))}
      minusBasketAction={(pay)=>{
        return dispatch(productModule.minusBasketAction(pay))
      }}
      
      />
  );
};

export default React.memo(CartContainer);