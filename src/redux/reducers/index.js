import { combineReducers } from 'redux'
import {counterReducer} from './counterReducer'
import {layoutReducer} from './layoutReducer'

export const reducer = combineReducers({
    contador : counterReducer,
    layout: layoutReducer
})

