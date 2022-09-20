import './App.css';
import Cardtemplate from './components/card/cardMain/cardMain';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1 className='MainPageTitle'>NFT CHALLENGE</h1>
       <Cardtemplate/>
      </header>
    </div>
  );
}

export default App;
