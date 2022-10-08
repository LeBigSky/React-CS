import React from 'react'
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import './App.css';
import Countries from './components/Countries'
import Header from './components/Header';
import Home from './page/Home';

function App() {
  return (
  <div>
    <Header/>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/countries" element={<Countries/>}/>
            <Route path="*" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
</div>
  );
}

export default App;
