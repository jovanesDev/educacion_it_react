import React from 'react'
import Card from '../components/Card/Card'
import { productos } from '../config'

const Home = () => {

  return (
    <>
        <h1>Home</h1>
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