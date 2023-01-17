import React, { createContext, useState } from 'react'

// 1 crear un componente 
// 2 decir a reacr que este componente es un proveedor y va a tener un context 
// 3 que el componente retorne el context creado a modo proveedor !

export const UserContext = createContext('')

const UserGlobal = ({children}) => {

    const [user, setUser] = useState(false);
    const [permitido,setPermitido] = useState(false)

    const handlePermitir = () => setPermitido(true)
    const handleNoPermitir = () => setPermitido(false);

    const handleLogin = () => setUser(true)

    const handleLogOut = () => setUser(false)

  return (
   <UserContext.Provider value={{
    user,
    permitido,
    handleLogin,
    handleLogOut,
    handlePermitir,
    handleNoPermitir

   }}>
        {children}
   </UserContext.Provider>
  )
}

export default UserGlobal