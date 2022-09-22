import React from 'react';
import UserCard from './components/userCard';
import '../src/css/App.css';
import Upcards from './components/UpCardsContainer';
import Downcards from './components/DownCardsContainer';

function App() {
  return (
    <div className="App">
      <UserCard/>
      <Upcards/>
      <Downcards/>
    </div>
  );
}

export default App;
