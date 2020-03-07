import { handleActions, createAction } from 'redux-actions'
import {productItems} from '../data/productItem'
import {coupons} from '../data/coupons'

const GET_PRODUCT = 'Product/GET_PRODUCT'
const PUSH_BASKET = 'Product/PUSH_BASKET'
const POP_BASKET = 'Product/POP_BASKET'
const PLUS_BASKET = 'Product/PLUS_BASKET'
const MINUS_BASKET = 'Product/MINUS_BASKET'
const GET_COUPON = 'product/GET_COUPON'

export const getProductAction = createAction(GET_PRODUCT)
export const pushBasketAction = createAction(PUSH_BASKET)
export const popBasketAction = createAction(POP_BASKET)
export const plusBasketAction = createAction(PLUS_BASKET)
export const minusBasketAction = createAction(MINUS_BASKET)
export const getCouponAction = createAction(GET_COUPON)

const initialState = {
  result : productItems,
  baskets : [],
  coupons : coupons,
  price: 0,
}

export default handleActions({
  [GET_PRODUCT]: (state, action) => {
    return {
      ...state
    }
  },
  [PUSH_BASKET]: (state, {payload:product})=>{
    return {
      ...state,
      baskets : state.baskets.concat(product)
    }
  },
  [POP_BASKET]: (state, {payload:id})=>{
    return {
      ...state,
      baskets : state.baskets.filter(ele=>{
        return ele.product.id !== id.id
      })
    }
  },
  [GET_COUPON]:(state,action)=>{
    return {
      ...state,
      coupons: state.coupons
    }
  },
  [PLUS_BASKET]:(state,{payload:price})=>{
    return {
      ...state,
      price: state.price + price
    }
  },
  [MINUS_BASKET]:(state,{payload:price})=>{
    return {
      ...state,
      price: state.price - price
    }
  },

},initialState)

// export const pushBasketAction2 = () => dispatch => {
  
//   dispatch(pushBasketAction());

// }
// export const popBasketAction2 = () => dispatch => {
  
//   dispatch(popBasketAction());

// }

