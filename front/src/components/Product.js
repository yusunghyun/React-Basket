import React from 'react';

const Product = ({item,baskets,popBasketAction,pushBasketAction,minusBasketAction}) => {
  const [bd,setBd] = React.useState('담기')
  const [basket, setBasket] = React.useState(baskets)
  
  React.useEffect(()=>{
    if(Array.from(basket).some((ele,idx)=>ele.product.id === item.id)) setBd('빼기')
    else setBd('담기')
  },[basket])
  const basketAction = React.useCallback(()=>{
    if(bd==='담기'){

      pushBasketAction({product:item})
      
      setBd('빼기')
    }
    else{
      popBasketAction({id:item.id})
      minusBasketAction(item)

      setBd('담기')
    }
  })
  return (
    <div>
      <div>{item.title}</div>
      <img src={item.coverImage} height='100px' width='100px' ></img>
      <span>{item.price}원</span>
      <button onClick={()=>basketAction()}>{bd}</button>
      
    </div>
  );
};

export default Product;