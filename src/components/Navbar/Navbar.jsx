import React, { useContext } from "react";
import NavLi from "./NavLi";
import './Navbar.css'
import { UserContext } from "../../context/UserGlobal";


const Navbar = (props) => {

  const { logo_text, navbarlinks,navbar_styles } = props;
  const {handleLogOut} = useContext(UserContext)

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
            {navbarlinks && navbarlinks.map(({path,text}, index) => (
              <NavLi key={index} path={path} text={text} />
            ))}
          </ul>
        </div>

        <button onClick={handleLogOut} className="btn btn-danger">Log Out</button>
      </div>
    </nav>
  );
};

export default Navbar;
