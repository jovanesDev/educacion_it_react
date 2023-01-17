import React from "react";
import { Link , useNavigate, Navigate} from "react-router-dom";

const Card = (props) => {
  const { nombre, precio, descripcion, id } = props;
  const navigate = useNavigate()

  const volver = () => navigate(-1)
  const navigateTo = (path) => navigate(path)
  const user = false;


  // useEffect(() => {
  //   // si la condicion no se cumple entonces navigate('/')
  
  //   return () => {
  //     second
  //   }
  // }, [])

 // if(!user) return <Navigate to={'/contacto'}/>
  

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title"> Nombre : {nombre}</h5>
        <h5 className="card-title"> Precio : {precio}</h5>
        <p className="card-text">{descripcion}</p>
        {id && (
           <button onClick={()=>navigateTo(`/individual/${id}`)} className="btn btn-primary">Ver Mas</button>
          // <Link to={`/individual/${id}`} className="btn btn-primary">
          //   Ver Mas
          // </Link>
        )}
        {!id && (
          <button onClick={volver} className="btn btn-secondary">Volver</button>
        )}
      </div>
    </div>
  );
};

export default Card;
