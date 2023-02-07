import { layoutTypes } from "../constants/layoutTypes";

export const darkModeOnFn = () => ({
  type: layoutTypes.DARK_MODE_ON
})

export const lightModeOnFn = () => ({
  type: layoutTypes.LIGHT_MODE_ON,
})

export const toastOnFn = (titulo) => ({
  type: layoutTypes.TOAST_ON,
  payload:titulo
})

export const toastOffFn = () => ({
  type: layoutTypes.TOAST_OFF,
})



