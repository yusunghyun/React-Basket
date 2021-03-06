import React from 'react';
import '../App.css'

const Product = ({item,baskets,popBasketAction,pushBasketAction,minusBasketAction}) => {
  const [bd,setBd] = React.useState('담기')
  // const [basket, setBasket] = React.useState(baskets)
  
  React.useEffect(()=>{ //랜더링될 때 표시용
    if(Array.from(baskets).some((ele,idx)=>ele.product.id === item.id)) setBd('빼기')
    else setBd('담기')
  },[baskets])
  const basketAction = React.useCallback(()=>{ //담기빼기 행위
    if(bd==='담기'){
      if(baskets.length+1 <= 3){
        pushBasketAction({product:item})
        setBd('빼기')
      }
      else{
        alert('장바구니는 최대 3개까지 가능합니다!')
      }
    }
    else{
      popBasketAction({id:item.id})
      minusBasketAction(item)

      setBd('담기')
    }
  })
  return (
    <div className='title'>
      <div className='title2'>
        <img src={item.coverImage} height='216px' width='288px' ></img>
        <div>{item.title}</div>
        <span margin='auto'>{item.price}원</span>
        <button onClick={()=>basketAction()}>{bd}</button>
      </div>
    </div>
  );
};

export default Product;