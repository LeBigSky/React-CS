import React from "react";

function App() {
  let date= new Date()
  let annee= date.getFullYear()
  let mois= date.getMonth()+1
  let jour= date.getDate()
  let heure= date.getHours()
  let minutes= date.getMinutes()
  return (

    <div className="App">
    <p> Nous sommes le {jour}/{mois}/{annee} </p>
    <p>Il est {heure} : {minutes}</p>



    
    <p>Personal addon for 'git-hub' test purpose</p>
    </div>
  );
}

export default App;
