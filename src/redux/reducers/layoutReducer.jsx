import { layoutTypes } from "../constants/layoutTypes"

const initialState = {
    darkMode:false,
    lightMode:true,
    toast:{
        visible:false,
        titulo:''
    }
}

export const layoutReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case layoutTypes.DARK_MODE_ON:
    return { ...state, darkMode:true,lightMode:false }

  case layoutTypes.LIGHT_MODE_ON:
    return { ...state, darkMode:false,lightMode:true}

  case layoutTypes.TOAST_ON:
    return { ...state,toast:{visible:true,titulo:payload} }

  case layoutTypes.TOAST_OFF:
    return { ...state,toast:{visible:false,titulo:''} }

  default:
    return state
  }
}
