import React from 'react'
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import './App.css';
import Countries from './components/Countries'
import Header from './components/Header';
import Select from './components/Select';
import Home from './page/Home';
import Singleland from './page/Singleland';

function App() {
  return (
  <div>
    <Header/>
    <Select/>
    <Countries/>
    <BrowserRouter>
        <Routes>
            <Route path="/"/>
            <Route path="/countries" element={<Countries/>}/>
            <Route path="*" element={<Home/>}/>
            <Route path="/singleland" element={<Singleland pays/>}/>
        </Routes>
    </BrowserRouter>
</div>
  );
}

export default App;
