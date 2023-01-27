import React from 'react'
import { useNavigate } from 'react-router-dom'

const Item = ({nombre,id,categoria,detail}) => {

    const navigate = useNavigate()

    const handleRedirect = () => navigate(`product/${id}`)

    const handleBack = () => navigate(-1)

  return (
      <>
      { detail && <button onClick={handleBack}>Volver</button>}
      <h3>Nombre : {nombre}</h3>
      <h4> Categoria : {categoria}</h4>
     { !detail && <button onClick={handleRedirect} >Ver mas </button>}
      <hr />
    </>
  )
}

export default Item