import Personnage from './components/Personnage';
import Articles from './components/Articles';
import React, {useState} from 'react';
import './App.css';

function App() {
const [donnee, setDonnee] = useState({
nom: "Axen",
prenom: "Gary",
age: 39,
commune: "Jette"
})

let rename= () => {
  setDonnee({
    nom: "Gourault", 
    prenom: "Nexcha", 
    age: 24, 
    commune: "La salle 4"
  })
}

const [cara, setCara] = useState ([
  {orientation:"Gaming", models: "Pc portable", marque: "AlienWeere"},
  {orientation:"Gaming", models: "Pc portable", marque: "Asuz"},
  {orientation:"Bureautique", models: "Pc portable", marque: "Acerre"},
  {orientation:"Media", models: "Pc Tour", marque: "Medium"},
  {orientation:"Multitâches", models: "Pc All-in-One", marque: "Ph"}
])

  return (
    <div className="App">
      <header className="App-header">
<div>
  <Personnage donnee={donnee} renomer={rename}/>

  {cara.map( (element, index) => {
    return <Articles key={index} car={element}/>
  })}

</div>
      </header>
    </div>
  );
}

export default App;
