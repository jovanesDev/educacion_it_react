import { clienteAxios } from "../../axios"
import { productsTypes } from "../constants/productsType"


 const getProductsSuccess = (data) => ({
  type: productsTypes.GET_PRODUCTS_SUCCESS,
  payload:data
})

 const getProductsFaild = () => ({
  type: productsTypes.GET_PRODUCTS_FAILD,
  payload:[]
})

const setProductSuccess = (data) => ({
    type:productsTypes.SET_PRODUCT_SUCCESS,
    payload:data
})
const setProductFaild = () => ({
    type:productsTypes.SET_PRODUCT_FAILD,
    payload:null
})

export const getProducts = () => {

    return async (dispatch) => {

        try {
            const res =  await clienteAxios.get('/products')
            dispatch(getProductsSuccess(res.data))
        }catch (err) {
            console.log(err)
            dispatch(getProductsFaild())
        }
    }
}

export const setProducts = (data) => {

    return async (dispatch) => {

        try {
            const res =  await clienteAxios.post('/products',data)
            dispatch(setProductSuccess(res.data))
        }catch (err) {
            console.log(err)
            dispatch(setProductFaild())
        }
    }
}

