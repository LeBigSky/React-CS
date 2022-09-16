import logo from './logo.svg';
import './App.css';

function App() {
  let datecourante = new Date();
  let tampJs= datecourante.getTime();
  let timephp= tampJs/1000
  let jour= datecourante.getDate()
  let mois= datecourante.getMonth()
  let year= datecourante.getFullYear()
  return (
    
    <div className="App">
      <div>
      <header className="App-header">
        <img src='sharingan.png' className='App-logo'></img>

<p>temps Javascript est de  {tampJs}</p> 
<p>et le temps de PHP est de {timephp} </p>
<p>Nous somme le {jour}/{mois} /{year}</p> 
  
      </header>

    </div>
    <footer>Un site Gary l' Geek</footer>
</div>

  );
}

export default App;
