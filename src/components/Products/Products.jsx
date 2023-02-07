import React, { useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getProducts, setProducts } from '../../redux/actions/productsActions'
import ProductsForm from './ProductsForm';

const Products = () => {
    const [show,setShow] = useState(false);

    const toggleShow = () => setShow(!show);

    const { products } = useSelector((store) => store.productos)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
        // eslint-disable-next-line
    }, [])
    
    const setProductFn = (data) => {
      dispatch(setProducts(data))
      toggleShow()
    } 

  return (
    <div>

        <hr />

        <button onClick={toggleShow}>{show ? 'Ocultar Form' : 'Mostrar Form'}</button>
        {show && <ProductsForm setProductFn={setProductFn}/> }
        {products.length > 0 && products.map(({name,id}) => (
            <li key={id}>{name} <span>Borrar</span></li>
        ))}
    </div>
  )
}

export default Products