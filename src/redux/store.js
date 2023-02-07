import {createStore,applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer } from './reducers'
import thunk from 'redux-thunk'

export const store = createStore(reducer,composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  ))

  // getTodosLosProductos ( token ) => Backend  

    // funcion de checkeo 'token ' y lo valid :
    // en el caso de que el token sea valido ()
    // el token es invalido  logout // o que devuelva un codigo de error 401 

  // Backend => todos los datos (en este caso son los productos)