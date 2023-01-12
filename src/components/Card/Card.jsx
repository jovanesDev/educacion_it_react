import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { nombre, precio, descripcion, id } = props;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title"> Nombre : {nombre}</h5>
        <h5 className="card-title"> Precio : {precio}</h5>
        <p className="card-text">{descripcion}</p>
        {id && (
          <Link to={`/individual/${id}`} className="btn btn-primary">
            Ver Mas
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
