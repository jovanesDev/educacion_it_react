import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { navbarlinks, routes } from ".";
import { UserContext } from "../context/UserGlobal";
import Login from "../pages/Login";

const Routing = () => {

  const {user} = useContext(UserContext)

  useEffect(() => {

  }, [user])
  

  return (
    <Router>
      <>
      { user ? <>
      <Navbar navbarlinks={navbarlinks} />
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
      
      </> : (
        <Routes>
            <Route  path={'/'} element={<Login/>} /> 
            <Route  path="*" element={<Navigate to={'/'}/>} />
        </Routes>
      )}
      </>
    </Router>
  );
};

export default Routing;
