import React from "react";
import NavLi from "./NavLi";



const Navbar = (props) => {
  const { logo_text, navbarlinks,navbar_styles } = props;
  // DomSync 
  // Props - (90%)
  // States - V 
  // Ciclo de Vida

  return (
    <nav className={`${navbar_styles ? navbar_styles : 'navbar navbar-expand-lg bg-body-tertiary'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {logo_text}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {navbarlinks.map((link, index) => (
              <NavLi key={index} text={link} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
