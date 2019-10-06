import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from '../store.js';
import { Provider } from 'react-redux';
import Counter from  '../Components/counter.js';
import { Name } from '../Components/counter.js'

function App() {
  return (
    <Provider store = { store } >
     <Counter/>
     <Name/>
    </Provider>
  );
}

export default App;
