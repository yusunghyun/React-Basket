import React from 'react';
import {useSelector, useDispatch}  from 'react-redux'
import ProductList from '../components/ProductList'
import * as productModule from '../modules/Product'

const ProductContainer = () => {

  const {result,baskets} = useSelector(state=>{ //상태 꺼네오기
    return {
      ...state.productModule
    }
  })

  const dispatch = useDispatch()//국룰

  React.useEffect(()=>{ //최초 한번 사용.
    dispatch(productModule.getProductAction())
  },[]);

  return (
    <ProductList
      result={result}
      baskets={baskets}
      pushBasketAction={(product)=>dispatch(productModule.pushBasketAction(product))}
      popBasketAction={(product)=>dispatch(productModule.popBasketAction(product))}
      />
  );
};

export default React.memo(ProductContainer);