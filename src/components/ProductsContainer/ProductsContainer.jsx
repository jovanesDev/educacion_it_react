import React, { useEffect,useContext } from "react";
import Item from "../Item/Item";
import { ProductContext } from "../../context/ProductProvider";

const ProductsContainer = () => {
  const {getAllProducts,products,loading} = useContext(ProductContext)

  useEffect(() => {
    getAllProducts()
  }, []);

  return (
    <div>
        <hr />
      {loading && <h1>Cargando...</h1>}
      {!loading && products.length > 0 && (
        <>
          {products.map(({ id, nombre, categoria }) => (
            <Item nombre={nombre} id={id} categoria={categoria} key={id} />
          ))}
        </>
      )}
    </div>
  );
};

export default ProductsContainer;
