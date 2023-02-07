import { combineReducers } from 'redux'
import { counterReducer  } from './counterReducer'
import { layoutReducer } from './layoutReducer'
import { productsRecuer } from './prodcutsReducer'

export const reducer = combineReducers({
    contador : counterReducer,
    layout: layoutReducer,
    productos:productsRecuer
})

