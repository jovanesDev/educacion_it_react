import React, { useContext, useEffect } from 'react'
import Card from '../components/Card/Card'
import { productos } from '../config'
import { UserContext } from '../context/UserGlobal'

const Home = () => {

  const {permitido,handlePermitir,handleNoPermitir} = useContext(UserContext)

  useEffect(() => {

  }, [permitido])
  

  return (
    <>
        <h1>Home</h1>
        <div className='container my-5'>
        <h3> Accesso a InfoSecreta {permitido ? 'Habilitado' : 'Inhabilitado'} </h3>
        <button 
          className='my-2'
          onClick={permitido ? handleNoPermitir : handlePermitir}
        >
            {permitido ? 'Prohibir el Accesso' : 'Habilitar el Accesso'}
        </button>
        </div>

    {
      productos.map(({nombre,precio,descripcion,id},index) => (
        <Card 
        nombre={nombre} 
        precio={precio} 
        descripcion={descripcion} 
        id={id}
        key={index}
        />
      ))
    }
    </>

  )
}

export default Home