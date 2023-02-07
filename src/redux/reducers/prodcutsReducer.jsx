import { productsTypes } from "../constants/productsType"

const initialState = {
    products:[],
}

export const productsRecuer = (state = initialState, { type, payload }) => {
  switch (type) {

    case productsTypes.GET_PRODUCTS_SUCCESS:
    case productsTypes.GET_PRODUCTS_FAILD:
        return {
            ...state,
            products:payload
        }

    case productsTypes.SET_PRODUCT_SUCCESS:
    case productsTypes.SET_PRODUCT_FAILD:
      return {
        ...state, 
        products:[...state.products,payload]
      }
  default:
    return state
  }
}
