import { handleActions, createAction } from 'redux-actions'
import {productItems} from '../data/productItem'

const GET_PRODUCT = 'Product/GET_PRODUCT'

export const getProductAction = createAction(GET_PRODUCT)

const initialState = {
  result : productItems
}

export default handleActions({
  [GET_PRODUCT]: (state = initialState, action) => {
    return {
      ...state
    }
  }
},initialState)


