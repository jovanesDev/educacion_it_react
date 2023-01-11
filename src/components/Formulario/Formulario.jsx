import React, { useState } from "react";
import FormField from "./FormField";

const Formulario = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    email: "",
    direccion:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  return (
    <form className="w-50 mx-auto my-5">
      {Object.entries(formulario).map(([key, value], index) => (
        <FormField
          label={key}
          name={key}
          value={value}
          key={index}
          onChange={handleChange}
        />
      ))}
      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
};

export default Formulario;
