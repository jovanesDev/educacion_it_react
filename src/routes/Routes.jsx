import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { navbarlinks, routes } from ".";

const Routing = () => {
  return (
    <Router>
      <Navbar navbarlinks={navbarlinks} />
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </Router>
  );
};

export default Routing;
