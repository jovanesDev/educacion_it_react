import './App.css';
import Contador from './components/Contador/Contador';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import './components/Contador/Contador.css'
import { useState } from 'react';

function App() {

  const navbarlinks = ['inicio','percios','nosotros','contacto']

  const [show, setShow] = useState(true);

  return (
    <div>
         { show ? <Contador/> : <h1>Cargandooo...</h1>}
         <button onClick={() => setShow(!show) }>{show ? 'Oculatar' : 'Mostrar '}</button>
          {/* <Contador valor_inicial={5}/> */}
    </div>
  );
}

export default App;
