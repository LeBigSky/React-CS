

function App() {
  let date= new Date()
  let annee= date.getFullYear()
  let mois= date.getMonth()+1
  let jour= date.getDate()
  let heure= date.getHours()
  let minutes= date.getMinutes()
  return (
    <div className="App">
      <p> NOUS LE {jour}/{mois}/{annee} IL EST {heure}:{minutes}</p>
      
    </div>
  );
}

export default App;
