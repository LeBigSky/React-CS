import React from 'react';
import logo from './logo.svg';
import shari from './sharingan.png'
import './App.css';

function App() {
  let datecourante = new Date();
  let tampJs= datecourante.getTime();
  let timephp= tampJs/1000
  let jour= datecourante.getDate()
  let mois= datecourante.getMonth()
  let year= datecourante.getFullYear()
  return (
    'Hello React'
    // <header className='App-header'>
   
    //   <img src={shari} className='App-logo'></img>
    //   <h1 className='App-theBoss'>C'est Gary qui te parle</h1>
    // </header>
  );
}

export default App;
