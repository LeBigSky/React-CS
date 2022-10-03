
import React from 'react';
import './App.css';

class App extends React.Component{
  state= {
    array:[5,'Voiture ' , 'camion ' , 17, 'moto ']
  }

removeEl= ()=>{
  this.setState(this.state.array.splice(0,1))
}

changeColor=()=>{
  if(this.state.array.length === 0)
  
  document.body.classList.add('background-red');
}
  render(){
    let arraylenght= this.state.array.length;
     console.log(arraylenght)
    
  return (
   
    <div className="App">
   <div>{arraylenght}{this.changeColor()}
   <div><button onClick={this.removeEl}>Click</button></div>
   <div><h1>{this.state.array[0]} {this.state.array[1]} {this.state.array[2]} {this.state.array[3]} {this.state.array[4]}  </h1></div>
   </div>
    </div>
  );
  }
}
export default App;
