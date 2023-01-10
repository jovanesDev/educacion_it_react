import { useEffect, useState } from 'react'

const Contador = (props) => {

const {valor_inicial} = props;

//   const [contador, setContador ] = useState(valor_inicial || 1)
//   const [name , setName] = useState('Jorge');
//   const [turnOn, setTurnOn] = useState(false);


// Ciclo de vida se consta en 3 partes 
 // 1 es cuando carga // document.ready // document.onload 
 // 2 es cuando cambia // change o cambio 
 // 3 es cuando componente muere => deja de existir 

//  useEffect(() => {
//     // cuando el componente carga 
//    return () => {
//  // la parte 3 / osea cuando el componente muere 
//    }
//  }, [
//     // la parte cuando el componente cambia 
//     ])

// console.log('es el console log del componente')
 


  const [state, setState] = useState({
    contador: valor_inicial || 1,
    name : 'Jorge',
    turnOn : false
  })


  const {contador,name,turnOn} = state


    // useEffect(() => {
    
    //     console.log('es el console log del useEffect ')
    
    // return () => {
    // }
    // }, [])


    
    // useEffect(() => {
    
    // haces peticion => obtenes los productos => guardas en un state 
    
    //     return () => {
                // deberias hacer limpieza => volver a poner el estado productos a su valor inicial 
    //     }
    // }, [contador])


   function sumar () {
    setState({
        ...state,
        contador: state.contador + 1
    })
   }

   function restar () {
     setState({
        ...state,
        contador: state.contador - 1
    })
   }

   function reset () {
    setState({
        ...state,
        contador: valor_inicial || 1
    })
   }

   function toggleTurnOn () {
      setState({
        ...state,
        turnOn: !state.turnOn
      })
   }

   

   // Volvemos a las 9 Brake 

  return (
    <div className={`${turnOn ? 'turnOn' : 'turnOf'} my-5`}>
        <h1>Contador : {contador}</h1>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
        <button onClick={reset}>Reset</button>
        <button onClick={toggleTurnOn}>{turnOn ? 'Apagar' : 'Prender' }</button>
    </div>
  )
}

export default Contador