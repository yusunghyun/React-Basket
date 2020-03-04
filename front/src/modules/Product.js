import { handleActions, createAction } from 'redux-actions'
import {productItems} from '../data/productItem'

const GET_PRODUCT = 'Product/GET_PRODUCT'
const PUSH_BASKET = 'Product/PUSH_BASKET'
const POP_BASKET = 'Product/POP_BASKET'

export const getProductAction = createAction(GET_PRODUCT)
export const pushBasketAction = createAction(PUSH_BASKET)
export const popBasketAction = createAction(POP_BASKET)

const initialState = {
  result : productItems,
  baskets : []
}

export default handleActions({
  [GET_PRODUCT]: (state=initialState, action) => {
    return {
      ...state
    }
  },
  [PUSH_BASKET]: (state=initialState, {payload:product})=>{
    return {
      ...state,
      baskets : state.baskets.concat(product)
    }
  },
  [POP_BASKET]: (state=initialState, {payload:id})=>{
    return {
      ...state,
      baskets : state.baskets.filter(ele=>{
        return ele.product.id !== id.id
      })
    }
  },
},initialState)


