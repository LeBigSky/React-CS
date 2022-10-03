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

const [cara] = useState ([
  {orientation:"Gaming", models: "Pc portable", marque: "AlienWare"},
  {orientation:"Gaming", models: "Pc portable", marque: "Asuz"},
  {orientation:"Bureautique", models: "Pc portable", marque: "Acer"},
  {orientation:"Media", models: "Pc Tour", marque: "Medion"},
  {orientation:"Multitâches", models: "Pc All-in-One", marque: "Hp"}
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
