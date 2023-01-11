import React from 'react'

const Main = (props) => {

const {children} = props

// step uno => componente1 = formulario => inputs => usuario
// step 2 => componente2

  const  nombre = 'Jova'
  return (
    <div>
        <h1> Yo estoy fijo cada vez que llames main</h1>

        <h1>{nombre}</h1>
        {children}
        <h1>Yo estoy abajo y estoy fijo </h1>
    </div>
  )
}

export default Main
