import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductProvider";

const Form = () => {

    const {addProduct} = useContext(ProductContext)

    const [form, setForm] = useState({
        nombre:'',
        categoria:''
    })

    const {nombre,categoria} = form

    const handleChange = (e) => {
        const {value,name} = e.target;
        setForm({
            ...form,
            [name]:value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        addProduct(form)
    } 


  return (
    <form style={{display:'flex',flexDirection:'column',width:'50%',margin:'0 auto'}} onSubmit={handleSubmit}>
        <h4>Product Form</h4>
      <input type='text' placeholder="nombre"  onChange={handleChange} name='nombre' value={nombre} />
      <input type='text' placeholder="categoria" onChange={handleChange} name='categoria' value={categoria} />
      <input type="submit" value='Agregar'/>
    </form>
  );
};

export default Form;
