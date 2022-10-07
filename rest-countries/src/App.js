import React from 'react'
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import './App.css';
import Countrycard from './components/Countrycard'

function App() {
  return (
    <BrowserRouter>
    <switch>
    <Countrycard/>
    </switch>
    </BrowserRouter>
  );
}

export default App;
