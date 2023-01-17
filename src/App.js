import './App.css';
import './components/Contador/Contador.css'
import UserGlobal from './context/UserGlobal';
import Routing from './routes/Routes';

function App() {
  return (
    <>
    <UserGlobal>
        <Routing/>
    </UserGlobal>
    </>
  );
}

export default App;
