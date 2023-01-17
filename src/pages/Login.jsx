import React, { useContext } from 'react'
import { UserContext } from '../context/UserGlobal'

const Login = () => {
    const {handleLogin} = useContext(UserContext)
  return (
    <>
    <h1>Pagina de Login </h1>
    <button onClick={handleLogin}>Logear usuario</button>
    </>
  )
}

export default Login