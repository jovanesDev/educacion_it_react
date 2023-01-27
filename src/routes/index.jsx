import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import { routes } from './rutas'

const Rutas = () => {

    
  return (
    <Router>
        <>
        <ul>
            <h1>Navegacion</h1>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/formulario'}>Form</Link>
            </li>
        </ul>
        <hr />
        </>
        <Routes>
            {routes.map((route,index) => <Route key={index} {...route} />)}
        </Routes>
    </Router>
  )
}

export default Rutas