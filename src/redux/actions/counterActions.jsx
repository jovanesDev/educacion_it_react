import { counterTypes } from "../constants/counterTypes"

export const sumarFn = () => ({
  type: counterTypes.SUMAR,
})

export const restarFn = () => ({
  type: counterTypes.RESTAR,
})

export const resetearFn = () => ({
  type: counterTypes.RESETEAR,
})


