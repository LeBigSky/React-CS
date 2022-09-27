import React,  { useState } from 'react';
import UserCard from './components/userCard';
import '../src/css/App.css';
import Upcards from './components/UpCardsContainer';
import Downcards from './components/DownCardsContainer';
import { render } from '@testing-library/react';


function App () {
const [ day, setDay] = useState('week')
let x={day}
  return ( <div className="App">
      <UserCard changeTime={day => setDay(day)} />
        <div className='cards'> 
          <Upcards time={x}/>
          <Downcards time={x}/>
        </div>
    </div>
  );
}

export default App;
