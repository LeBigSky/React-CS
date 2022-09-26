import Ciseaux from './component/Ciseaux';
import Papier from './component/Papier';
import Pierre from './component/Pierre';
import Header from './component/Header';
import React from 'react';
  
import './style/App.css';

class App extends React.Component {
  state = {
    choice: "",
    score: "",
    house: "",
  }
handleCallback = (data) => {
  this.setState ({choice: data})
  this.state.choice= 'papier'

  if (this.state.choice == 'papier'){

   let x = Math.floor(Math.random(0)*2)

   if (x == 0){
   this.state.house= 'pierre'
   console.log(x)
   console.log(this.state)
   }
   
   if (x == 1){
    this.state.house= 'ciseaux'
    console.log(x)
   }
   
  }

  if (this.state.choice=='ciseaux'){
    this.state.choice= 'ciseaux'
    let x = Math.floor(Math.random(0)*2)
    if (x == 0){
      this.state.house= 'pierre'
    }
    if (x == 1){
      this.state.house= 'papier'
    }
  }

  if (this.state.choice=='pierre'){
    this.state.choice= 'pierre'
    let x = Math.floor(Math.random(0)*2)
    if (x == 0){
      this.state.house= 'ciseaux'
    }
    if (x == 1){
      this.state.house= 'papier'
    }
  }
 
}
render(){
                                           //////////////////////////// POINT NEUTRE //////////////////////////////////
  if (this.state.choice == "")
  return (
    <div className="App">
      <header className="App-header">
        <Header score = {this.state.score}/>
      </header>
      <div className='table'>
        <div className='jetonsUp'>
          <Papier parentCallback = {this.handleCallback} type= 'papier'/>
           <Ciseaux parentCallback = {this.handleCallback} type= 'ciseaux'/>
        </div>
           <div className='jetonsDown'>
          <Pierre parentCallback = {this.handleCallback} type= 'pierre'/>
           </div>
      </div>
    </div>
  ); 
                                        //////////////////////////// IF PLAYER IS PAPER //////////////////////////////////

  else if ( this.state.choice == 'papier' && this.state.house == 'pierre')
  return (
    <div className="App">
      <header className="App-header">
        <Header score = {this.state.score}/>
      </header>
      <h1 className='result'>YOU WIN !</h1>
      <div className='table'>
        <div className='jetonsUp'>
            <span className='playerchoice'>You picked</span>
           <Papier parentCallback = {this.handleCallback} type= 'papier'/>
           <span className='housechoice'>House picked</span>
           <Pierre parentCallback = {this.handleCallback} type='pierre'/>
        </div>
          
      </div>
    </div>
  ); 

 else if ( this.state.choice == "papier" && this.state.house == 'ciseaux' )
 return (
  <div className="App">
    <header className="App-header">
      <Header score = {this.state.score}/>
    </header>
    <h1 className='result'>YOU LOOSE !</h1>
    <div className='table'>
     <div className='jetonsUp'>
         <span className='playerchoice'>You picked</span>
         <Papier parentCallback = {this.handleCallback} type= 'papier'/>
         <span className='housechoice'>House picked</span>
         <Ciseaux parentCallback = {this.handleCallback} type='ciseaux'/>
     </div>
       
    </div>
  </div>
); 

                                        //////////////////////////// IF PLAYER IS CISOR  //////////////////////////////////
 
else if (this.state.choice == "ciseaux" & this.state.house == 'pierre')
 return (
  <div className="App">
    <header className="App-header">
      <Header score = {this.state.score}/>
    </header>
    <div className='table'>
          <span className='playerchoice'>You picked</span>
          <Ciseaux parentCallback = {this.handleCallback} type='ciseaux'/>
         <span className='housechoice'>House picked</span>
         <Pierre parentCallback = {this.handleCallback} type='pierre'/>
    </div>
  </div>
); 

 else if (this.state.choice == "ciseaux" & this.state.house == 'papier')
 return (
  <div className="App">
    <header className="App-header">
      <Header score = {this.state.score}/>
    </header>
    <div className='table'>
          <span className='playerchoice'>You picked</span>
          <Ciseaux parentCallback = {this.handleCallback} type= 'ciseaux'/>
         <span className='housechoice'>House picked</span>
         <Papier parentCallback = {this.handleCallback} type= 'papier'/>
    </div>
  </div>
); 

                                  //////////////////////////// IF PLAYER IS ROCK //////////////////////////////////


  else if (this.state.choice == "pierre" & this.state.house == 'ciseaux')
  return (
    <div className="App">
      <header className="App-header">
        <Header score = {this.state.score}/>
      </header>
      <div className='table'>
            <span className='playerchoice'>You picked</span>
            <Pierre parentCallback = {this.handleCallback} type='pierre'/>
           <span className='housechoice'>House picked</span>
           <Ciseaux parentCallback = {this.handleCallback} type='ciseaux'/>
      </div>
    </div>
  ); 



 else if (this.state.choice == "pierre" & this.state.house == 'papier')
 return (
  <div className="App">
    <header className="App-header">
      <Header score = {this.state.score}/>
    </header>
    <div className='table'>
          <span className='playerchoice'>You picked</span>
          <Pierre parentCallback = {this.handleCallback} type='pierre'/>
         <span className='housechoice'>House picked</span>
         <Papier parentCallback = {this.handleCallback} type= 'papier'/>
    </div>
  </div>
); 
  
}

}

export default App;
