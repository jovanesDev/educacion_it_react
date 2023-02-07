import React from 'react'
import './App.css';
import Contador from './components/Contador/Contador';
import {Provider} from 'react-redux'
import { store } from './redux/store';
import Products from './components/Products/Products';

function App() {
  return (
    <Provider store={store}>
        <Contador/>
        <Products/>
    </Provider>
  );
}

export default App;
