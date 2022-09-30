import Ciseaux from './component/Ciseaux';
import Papier from './component/Papier';
import Pierre from './component/Pierre';
import Header from './component/Header';
import Rules from './component/Rules';
import React from 'react';


import './style/App.css';

class App extends React.Component {
  sendMessage = (e) => {
    e.preventDefault();
    this.timer = setTimeout(() => alert('Hey ??'), 1000);
  }
  state = {
    choice: "",
    score: 0,
    house: "",
    time: 3,
  }
settime= ()=> {
  setTimeout(() => {
    this.setState({time:4})
  }, 4200)}


  onResetClick = () => {
   this.handleCallback('')
   this.setState({time:3})
  }
// onRules = ()=>{  A FAIRE CE 28/09 Ajouter la fonction on rules, un state qui change le display du modal onclick
  
// }
  onScore = (data) => {
  this.state.score= this.state.score + data
  }

handleCallback = (data) => {
  this.setState ({choice: data})
 this.state.choice= data

  if (this.state.choice ==='papier'){
 this.state.choice='papier'
  let x = Math.floor(Math.random(0)*3)

   if (x === 0){
   this.state.house='pierre'
  
   }
   
   if (x === 1){
    this.state.house='ciseaux'
   
   }
   if (x === 2){
    this.state.house='papier'
    
   }
  }

  if (this.state.choice==='ciseaux'){
    this.state.choice= 'ciseaux'
    let x = Math.floor(Math.random(0)*3)
    if (x === 0){
      this.state.house='pierre'
    }
    if (x === 1){
      this.state.house='papier'
    }
    if (x === 2){
      this.state.house='ciseaux'
    }
  }

  if (this.state.choice==='pierre'){
    this.state.choice= 'pierre'
    let x = Math.floor(Math.random(0)*3)
    if (x === 0){
      this.state.house='ciseaux'
    }
    if (x === 1){
      this.state.house='papier'
    }
    if (x === 2){
      this.state.house='pierre'
    }
  }
 
}

Result = (winner) =>{
  let x = false
  if (winner === 'loose'){

 return  <div><h2>YOU LOSE</h2>
 {this.onScore(-0.5)}
 <button onClick={this.onResetClick}>PLAY AGAIN</button>

 </div> 

  }
  else if (winner === 'win'){
    {this.onScore(+0.5)}
    return  <div><h2>YOU WIN</h2>
    <button onClick={this.onResetClick}>PLAY AGAIN</button>

    </div>
  }
  else if (winner === 'draw'){
   
    return  <div><h2>D R A W</h2>
    <button onClick={this.onResetClick}>PLAY AGAIN</button>
    
    </div>
  }
} 

render()
{ 
                                           //////////////////////////// POINT NEUTRE //////////////////////////////////
  if (this.state.choice === "")
  return (
    <div className="App">
    
      <header className="App-header">
        <Header score = {this.state.score}/>
      </header>
      <div className='table'>
        <div className='jetonsUp'>
          <Papier parentCallback = {this.handleCallback} type='papier'/>
           <Ciseaux parentCallback = {this.handleCallback} type='ciseaux'/>
        </div>
           <div className='jetonsDown'>
          <Pierre parentCallback = {this.handleCallback} type='pierre'/>
           </div>
      </div>
     <Rules/>
    </div>
  ); 

                                        //////////////////////////// IF PLAYER IS PAPER //////////////////////////////////

  else if (this.state.choice ==='papier' && this.state.house ==='pierre' && this.state.time === 3)
  return (
    <div className="App">
      <header className="App-header">
        <Header score = {this.state.score}/>
      </header>
      <div className='battle'>
     <div className='jeton'>
      <div className='gauche'>
        <span className='playerchoice'>You picked</span>
         <Papier/>
      </div>
         <div className='centre'>
         <div className='pleasewait'>PLEASE WAIT</div>
         </div>
         <div className='droite'>
    {this.settime()}
          <span className='playerchoice'>Chosing . . .</span>
          <div className='shadowtoken'></div>
         </div>
     </div>
      </div>
      <Rules/>
    </div>
  ); 
  else if (this.state.choice ==='papier' && this.state.house ==='pierre' && this.state.time === 4)
return(
  <div className="App">
  <header className="App-header">
    <Header score = {this.state.score}/>
  </header>
  <div className='battle'>
 <div className='jeton'>
  <div className='gauche'>
    <span className='playerchoice'>You picked</span>
     <div className='winner'><Papier/></div>
  </div>
     <div className='centre'>
      {this.Result('win')} 
     </div>
     <div className='droite'>
      <span className='housechoice'>House picked</span>
        <Pierre/>
     </div>
 </div>
  </div>
  <Rules/>
</div>
); 

 

else if (this.state.choice ==='papier' && this.state.house ==='ciseaux' && this.state.time === 3)
  return (
    <div className="App">
      <header className="App-header">
        <Header score = {this.state.score}/>
      </header>
      <div className='battle'>
     <div className='jeton'>
      <div className='gauche'>
        <span className='playerchoice'>You picked</span>
         <Papier/>
      </div>
         <div className='centre'>
         <div className='pleasewait'>PLEASE WAIT</div>
         </div>
         <div className='droite'>
    {this.settime()}
          <span className='playerchoice'>Chosing . . .</span>
          <div className='shadowtoken'></div>
         </div>
     </div>
      </div>
      <Rules/>
    </div>
  ); 
  else if (this.state.choice ==='papier' && this.state.house ==='ciseaux' && this.state.time === 4)
return(
  <div className="App">
  <header className="App-header">
    <Header score = {this.state.score}/>
  </header>
  <div className='battle'>
 <div className='jeton'>
  <div className='gauche'>
    <span className='playerchoice'>You picked</span>
     <Papier/>
  </div>
     <div className='centre'>
      {this.Result('loose')} 
     </div>
     <div className='droite'>
      <span className='housechoice'>House picked</span>
        <div className='winner'><Ciseaux/></div>
     </div>
 </div>
  </div>
  <Rules/>
</div>
); 

else if (this.state.choice ==='papier' && this.state.house ==='papier' && this.state.time === 3)
  return (
    <div className="App">
      <header className="App-header">
        <Header score = {this.state.score}/>
      </header>
      <div className='battle'>
     <div className='jeton'>
      <div className='gauche'>
        <span className='playerchoice'>You picked</span>
         <Papier/>
      </div>
         <div className='centre'>
         <button className='pleasewait'><h4>PLEASE WAIT</h4></button>
         </div>
         <div className='droite'>
    {this.settime()}
          <span className='playerchoice'>Chosing . . .</span>
          <div className='shadowtoken'></div>
         </div>
     </div>
      </div>
      <Rules/>
    </div>
  ); 
  else if (this.state.choice ==='papier' && this.state.house ==='papier' && this.state.time === 4)
return(
  <div className="App">
  <header className="App-header">
    <Header score = {this.state.score}/>
  </header>
  <div className='battle'>
 <div className='jeton'>
  <div className='gauche'>
    <span className='playerchoice'>You picked</span>
     <Papier/>
  </div>
     <div className='centre'>
      {this.Result('draw')} 
     </div>
     <div className='droite'>
      <span className='housechoice'>House picked</span>
        <Papier/>
     </div>
 </div>
  </div>
  <Rules/>
</div>
); 

                                        //////////////////////////// IF PLAYER IS CISOR  //////////////////////////////////
 

else if (this.state.choice ==='ciseaux' && this.state.house ==='pierre' && this.state.time === 3)
  return (
    <div className="App">
      <header className="App-header">
        <Header score = {this.state.score}/>
      </header>
      <div className='battle'>
     <div className='jeton'>
      <div className='gauche'>
        <span className='playerchoice'>You picked</span>
         <Ciseaux/>
      </div>
         <div className='centre'>
         <div className='pleasewait'>PLEASE WAIT</div>
         </div>
         <div className='droite'>
    {this.settime()}
          <span className='playerchoice'>Chosing . . .</span>
          <div className='shadowtoken'></div>
         </div>
     </div>
      </div>
      <Rules/>
    </div>
  ); 
  else if (this.state.choice ==='ciseaux' && this.state.house ==='pierre' && this.state.time === 4)
return(
  <div className="App">
  <header className="App-header">
    <Header score = {this.state.score}/>
  </header>
  <div className='battle'>
 <div className='jeton'>
  <div className='gauche'>
    <span className='playerchoice'>You picked</span>
     <Ciseaux/>
  </div>
     <div className='centre'>
      {this.Result('loose')} 
     </div>
     <div className='droite'>
      <span className='housechoice'>House picked</span>
       <div className='winner'><Pierre/></div> 
     </div>
 </div>
  </div>
  <Rules/>
</div>
); 

else if (this.state.choice ==='ciseaux' && this.state.house ==='papier' && this.state.time === 3)
  return (
    <div className="App">
      <header className="App-header">
        <Header score = {this.state.score}/>
      </header>
      <div className='battle'>
     <div className='jeton'>
      <div className='gauche'>
        <span className='playerchoice'>You picked</span>
         <Ciseaux/>
      </div>
         <div className='centre'>
         <div className='pleasewait'>PLEASE WAIT</div>
         </div>
         <div className='droite'>
    {this.settime()}
          <span className='playerchoice'>Chosing . . .</span>
          <div className='shadowtoken'></div>
         </div>
     </div>
      </div>
      <Rules/>
    </div>
  ); 
  else if (this.state.choice ==='ciseaux' && this.state.house ==='papier' && this.state.time === 4)
return(
  <div className="App">
  <header className="App-header">
    <Header score = {this.state.score}/>
  </header>
  <div className='battle'>
 <div className='jeton'>
  <div className='gauche'>
    <span className='playerchoice'>You picked</span>
     <div className='winner'><Ciseaux/></div>
  </div>
     <div className='centre'>
      {this.Result('win')} 
     </div>
     <div className='droite'>
      <span className='housechoice'>House picked</span>
        <Papier/>
     </div>
 </div>
  </div>
  <Rules/>
</div>
); 

else if (this.state.choice ==='ciseaux' && this.state.house ==='ciseaux' && this.state.time === 3)
  return (
    <div className="App">
      <header className="App-header">
        <Header score = {this.state.score}/>
      </header>
      <div className='battle'>
     <div className='jeton'>
      <div className='gauche'>
        <span className='playerchoice'>You picked</span>
         <Ciseaux/>
      </div>
         <div className='centre'>
         <div className='pleasewait'>PLEASE WAIT</div>
         </div>
         <div className='droite'>
    {this.settime()}
          <span className='playerchoice'>Chosing . . .</span>
          <div className='shadowtoken'></div>
         </div>
     </div>
      </div>
      <Rules/>
    </div>
  ); 
  else if (this.state.choice ==='ciseaux' && this.state.house ==='ciseaux' && this.state.time === 4)
return(
  <div className="App">
  <header className="App-header">
    <Header score = {this.state.score}/>
  </header>
  <div className='battle'>
 <div className='jeton'>
  <div className='gauche'>
    <span className='playerchoice'>You picked</span>
     <Ciseaux/>
  </div>
     <div className='centre'>
      {this.Result('draw')} 
     </div>
     <div className='droite'>
      <span className='housechoice'>House picked</span>
        <Ciseaux/>
     </div>
 </div>
  </div>
  <Rules/>
</div>
); 

                                  //////////////////////////// IF PLAYER IS ROCK //////////////////////////////////
////  R O C K    VS   S C I S S O R S  /////
else if (this.state.choice ==='pierre' && this.state.house ==='ciseaux' && this.state.time === 3)
return (
  <div className="App">
    <header className="App-header">
      <Header score = {this.state.score}/>
    </header>
    <div className='battle'>
   <div className='jeton'>
    <div className='gauche'>
      <span className='playerchoice'>You picked</span>
       <Pierre/>
    </div>
       <div className='centre'>
       <div className='pleasewait'>PLEASE WAIT</div>
       </div>
       <div className='droite'>
  {this.settime()}
        <span className='playerchoice'>Chosing . . .</span>
        <div className='shadowtoken'></div>
       </div>
   </div>
    </div>
    <Rules/>
  </div>
); 
else if (this.state.choice ==='pierre' && this.state.house ==='ciseaux' && this.state.time === 4)
return(
<div className="App">
<header className="App-header">
  <Header score = {this.state.score}/>
</header>
<div className='battle'>
<div className='jeton'>
<div className='gauche'>
  <span className='playerchoice'>You picked</span>
   <div className='winner'><Pierre/></div>
</div>
   <div className='centre'>
    {this.Result('win')} 
   </div>
   <div className='droite'>
    <span className='housechoice'>House picked</span>
      <Ciseaux/>
   </div>
</div>
</div>
<Rules/>
</div>
);                          
////////////
////  R O C K    VS   P A P E R  /////
else if (this.state.choice ==='pierre' && this.state.house ==='papier' && this.state.time === 3)
return (
  <div className="App">
    <header className="App-header">
      <Header score = {this.state.score}/>
    </header>
    <div className='battle'>
   <div className='jeton'>
    <div className='gauche'>
      <span className='playerchoice'>You picked</span>
       <Pierre/>
    </div>
       <div className='centre'>
       <div className='pleasewait'>PLEASE WAIT</div>
       </div>
       <div className='droite'>
  {this.settime()}
        <span className='playerchoice'>Chosing . . .</span>
        <div className='shadowtoken'></div>
       </div>
   </div>
    </div>
    <Rules/>
  </div>
); 
else if (this.state.choice ==='pierre' && this.state.house ==='papier' && this.state.time === 4)
return(
<div className="App">
<header className="App-header">
  <Header score = {this.state.score}/>
</header>
<div className='battle'>
<div className='jeton'>
<div className='gauche'>
  <span className='playerchoice'>You picked</span>
   <Pierre/>
</div>
   <div className='centre'>
    {this.Result('loose')} 
   </div>
   <div className='droite'>
    <span className='housechoice'>House picked</span>
      <div className='winner'><Papier/></div>
   </div>
</div>
</div>
<Rules/>
</div>
);         
////////////
////  R O C K    VS   R O C K  /////
else if (this.state.choice ==='pierre' && this.state.house ==='pierre' && this.state.time === 3)
return (
  <div className="App">
    <header className="App-header">
      <Header score = {this.state.score}/>
    </header>
    <div className='battle'>
   <div className='jeton'>
    <div className='gauche'>
      <span className='playerchoice'>You picked</span>
       <Pierre/>
    </div>
       <div className='centre'>
       <div className='pleasewait'>PLEASE WAIT</div>
       </div>
       <div className='droite'>
  {this.settime()}
        <span className='playerchoice'>Chosing . . .</span>
        <div className='shadowtoken'></div>
       </div>
   </div>
    </div>
    <Rules/>
  </div>
); 
else if (this.state.choice ==='pierre' && this.state.house ==='pierre' && this.state.time === 4)
return(
<div className="App">
<header className="App-header">
  <Header score = {this.state.score}/>
</header>
<div className='battle'>
<div className='jeton'>
<div className='gauche'>
  <span className='playerchoice'>You picked</span>
   <Pierre/>
</div>
   <div className='centre'>
    {this.Result('draw')} 
   </div>
   <div className='droite'>
    <span className='housechoice'>House picked</span>
      <Pierre/>
   </div>
</div>
</div>
<Rules/>
</div>
);         
////////////
}
}
export default App;
