import React from 'react';
import './App.css';
import Perso from '../src/components/perso'

class App extends React.Component {
  state = {
    Gary: { nom: 'Axen', prenom: 'Gary', age: 28 },
    Batou: {nom : 'Dermael', prenom : 'Batou', age: 28},
    Elias: {nom : 'Aboutaharan', prenom: 'Elias', age : 30},
  }
  coucou= ()=> {
  
    this.setState({ Gary:{nom:'Gourault', prenom: 'Nexscha', age: 39} })

  }
  render(){
     return (
    <div className="App">
    <h1>Bonjour a tous, je suis {this.state.Gary.prenom} et  {this.state.Gary.nom} et j'ai {this.state.Gary.age} ans</h1> 
    <h1>Bonjour a tous, je suis {this.state.Batou.prenom} {this.state.Batou.nom} et j'ai {this.state.Batou.age} ans</h1> 
    <h1>Bonjour a tous, je suis {this.state.Elias.prenom} {this.state.Elias.nom} et j'ai {this.state.Elias.age} ans</h1> 
    <div><Perso stat={this.state} func={this.coucou}/></div>
    </div>
    )
  }
}
export default App;
