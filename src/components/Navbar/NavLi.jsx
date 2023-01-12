import React from "react";
import { NavLink } from "react-router-dom";

const NavLi = (props) => {
  const { text,path } = props;
  return (
    <li className="nav-item">
      <NavLink className={ ({isActive}) => ` ${isActive ? 'active nav-link' : 'nav-link'} `} to={path}>
        {text}
      </NavLink>
    </li>
  );
};

export default NavLi;
