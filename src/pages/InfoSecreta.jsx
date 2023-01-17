import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserGlobal'

const InfoSecreta = () => {

  const { permitido } = useContext(UserContext);

  if (!permitido) return <Navigate to="/"/>

  return (
    <h1>InfoSecreta</h1>
  )
}

export default InfoSecreta