import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { get, post } from "../services/http";

export const ProductContext = createContext("");

const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);

  const showLoading = () => setLoading(true);
  const hideLoading = () => setLoading(false);

  const getAllProducts = async () => {
    showLoading();
    const resultado = await get("/products");
    if (resultado.status === 200) {
      setProducts([...resultado.data]);
      hideLoading();
    }
    if (resultado.status !== 200) {
      alert("algo fallo");
      hideLoading();
    }
  };

  const getProduct = async (id) => {
    showLoading();
    const resultado = await get(`/products/${id}`);
    if (resultado.status === 200) {
      setProduct(resultado.data);
      hideLoading();
    }
    if (resultado.status !== 200) {
      alert("algo fallo");
      hideLoading();
    }
  };

  const addProduct = async (product) => {
    showLoading();
    const resultado = await post(`/products/`,product);
    
    if (resultado.status === 200) {
      setProducts([...products,resultado.data]);
      hideLoading();
    }
    if (resultado.status !== 200) {
      alert("algo fallo");
      hideLoading();
    }
  };



  return (
    <ProductContext.Provider
      value={{ 
        products, 
        product, 
        loading,
        getAllProducts, 
        getProduct,
        addProduct 
    }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
