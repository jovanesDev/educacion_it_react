import { useState } from 'react'

const ProductsForm = ({setProductFn}) => {

    const [form,setForm] = useState({
        name:'',
        categoria:''
    })

    const handleResetValues = () => setForm({name:'',categoria:''})


    const handleChange = (e) => {
        const {name,value} = e.target;

        setForm({
            ...form,
            [name]:value
        })
    }

    const handleSubmit = (e,data) => {
        e.preventDefault()
        handleResetValues()
        setProductFn(data)
    }

  return (
    <form onSubmit={(e) => handleSubmit(e,form)}>
        <input onChange={handleChange} name='name' value={form.name} type="text" />
        <select onChange={handleChange} value={form.categoria} name="categoria" id="">
            <option value={''}>...seleccionar</option>
            <option value={'zapatilla'}>Zapatilla</option>
        </select>
        <button type='submit'>Crear</button>
    </form>
  )
}

export default ProductsForm