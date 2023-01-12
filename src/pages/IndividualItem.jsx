import React from 'react'
import {useParams} from 'react-router-dom'
import Card from '../components/Card/Card'
import { productos } from '../config'

const IndividualItem = () => {
 
    const { id } = useParams()

  return (
    <>
    <h1>IndividualItem</h1>
    {productos.filter((producto) => producto.id == id).map(({nombre,precio,descripcion},index) => (
        <Card
            nombre={nombre}
            precio={precio}
            descripcion={descripcion}
            key={index}
        />
    )) }
    </>
  )
}

export default IndividualItem