import React from "react";

const NavLi = (props) => {
  const { text } = props;
  return (
    <li className="nav-item">
      <a className="nav-link" href="#">
        {text}
      </a>
    </li>
  );
};

export default NavLi;
