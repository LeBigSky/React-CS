import Article from './components/Article';
import Header from './components/Header';
import '../src/style/App.css';
import React, {useState} from 'react';
import data from '../src/assets/data/data.json'

export default function App() {

  /////////////// IMPORTATION DE MES ARTICLES
  let Marque = data.map( element => {
    return( <div>{ element.marque }</div>)
}) 
let Type= data.map( element => {
  return( <div>{ element.type }</div>)
}) 
let Descriptif= data.map( element => {
  return (<div>{ element.description}</div>)
})
let Prix= data.map( element =>{
  return ( <div>{element.prix}</div> )
})
let Stock= data.map( element =>{
  return ( <div>{element.stock}</div>)
})
////////////////////////////////////////////////////
let [userMoney, setUserMoney] = useState({money:20});
let [price, setPrice] = useState({price:0});

 let decreaseMoney=()=>{
setUserMoney({userMoney: userMoney - price})
  }
 let acheter=()=>{
setUserMoney={userMoney: userMoney - this.props.price}

  }
  return (
<div>
  <Header money={userMoney.money}/>
  <Article marque={Marque[0]} type={Type[0]} description={Descriptif[0]} prix={Prix[0]} stock={Stock[0]} />
</div>
  );
}


