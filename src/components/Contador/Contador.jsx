import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { resetearFn, restarFn, sumarFn } from '../../redux/actions/counterActions'

const Contador = () => {
const {counter} = useSelector(store => store.contador)
const dispatch = useDispatch()
  return (
    <div>
        <h1> PrevioContador : 0 </h1>
        <h1> Contador { counter }</h1>
        <hr />
        <button onClick={() => dispatch(sumarFn())}>Sumar</button>
        <button onClick={() => dispatch(restarFn())}>Restar</button>
        <button onClick={() => dispatch(resetearFn())}>Resetear</button>
    </div>
  )
}

export default Contador