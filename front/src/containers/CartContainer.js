import React from 'react';
import {useSelector, useDispatch}  from 'react-redux'
import * as productModule from '../modules/Product'
import CartList from '../components/CartList';

const CartContainer = () => {

  const {result,baskets,coupons} = useSelector(state=>{ //상태 꺼네오기
    return {
      ...state.productModule
    }
  })

  const dispatch = useDispatch()//국룰

  React.useEffect(()=>{ //최초 한번 사용.
    dispatch(productModule.getProductAction())
  },[]);

  return (
    <CartList
      result={result}
      baskets={baskets}
      coupons={coupons}
      pushBasketAction={(product)=>dispatch(productModule.pushBasketAction(product))}
      popBasketAction={(product)=>dispatch(productModule.popBasketAction(product))}
      // getCouponAction={(product)=>dispatch(productModule.getCouponAction(product))}
      />
  );
};

export default React.memo(CartContainer);