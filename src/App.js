import './App.css';
import ProductProvider from './context/ProductProvider';
import Rutas from './routes';


function App() {

  return (
    <>
    <ProductProvider>
       <Rutas/>
    </ProductProvider>
    </>
  );
}

export default App;