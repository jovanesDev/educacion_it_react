import { counterTypes } from "../constants/counterTypes"

const initialState = {
    counter : 0
}

export const counterReducer = (state = initialState, {type, payload} ) => {
  switch (type) {

  case counterTypes.SUMAR:
    return { ...state, counter: state.counter + 1 }

  case counterTypes.RESTAR:
    return { ...state, counter: state.counter - 1 }

  case counterTypes.RESETEAR:
    return { ...state, counter: 0 }

  default:
    return state
  }
}

