import { handleActions, createAction } from 'redux-actions'
import {productItems} from '../data/productItem'
import {coupons} from '../data/coupons'

const GET_PRODUCT = 'Product/GET_PRODUCT'
const PUSH_BASKET = 'Product/PUSH_BASKET'
const POP_BASKET = 'Product/POP_BASKET'
const GET_COUPON = 'product/GET_COUPON'

export const getProductAction = createAction(GET_PRODUCT)
export const pushBasketAction = createAction(PUSH_BASKET)
export const popBasketAction = createAction(POP_BASKET)
export const getCouponAction = createAction(GET_COUPON)

const initialState = {
  result : productItems,
  baskets : [],
  coupons : coupons,
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
  }
},initialState)

// export const pushBasketAction2 = () => dispatch => {
  
//   dispatch(pushBasketAction());

// }
// export const popBasketAction2 = () => dispatch => {
  
//   dispatch(popBasketAction());

// }

