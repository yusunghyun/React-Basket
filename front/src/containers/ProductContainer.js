import React from 'react';
import {useSelector, useDispatch}  from 'react-redux'
import ProductList from '../components/ProductList'
import * as productModule from '../modules/Product'

const ProductContainer = () => {

  const {result} = useSelector(state=>{ //상태 꺼네오기
    return {
      ...state.productModule
    }
  })

  const dispatch = useDispatch()//국룰

  React.useEffect(()=>{ //props가 변화 할 때만 사용.
    dispatch(productModule.getProductAction())
  },[]);

  return (
    <ProductList result={result} />
  );
};

export default React.memo(ProductContainer);