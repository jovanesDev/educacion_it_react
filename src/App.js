import React from 'react'
import './App.css';
import Contador from './components/Contador/Contador';
import {Provider} from 'react-redux'
import { store } from './redux/store';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Contador/>
      </Layout>
    </Provider>
  );
}

export default App;
