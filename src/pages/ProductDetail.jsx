import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "../components/Item/Item";
import { ProductContext } from "../context/ProductProvider";

const ProductDetail = () => {
  const { id } = useParams();
  const {getProduct,product,loading} = useContext(ProductContext)

  useEffect(() => {
    getProduct(id)
  }, []);

  return (
    <div>
      {loading && <h1>Cargando...</h1>}
      {(!loading && product) && (
        <Item
          detail={true}
          nombre={product.nombre}
          categoria={product.categoria}
        />
      )}
    </div>
  );
};

export default ProductDetail;
