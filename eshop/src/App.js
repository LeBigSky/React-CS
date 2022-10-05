import Article from './components/Article';
import Header from './components/Header';
import Footer from './components/Footer'
import Paniers from './components/Paniers';
import '../src/style/App.css';
import React, {useState} from 'react';
import data from '../src/assets/data/data.json'


export default function App() {

  let [articles, setArticle] = useState(
    {"marque": "Alienware","type": "Pc Portable", "prix": 4},
    {"marque": "Acer","type": "Pc Portable", "prix": 8},
    {"marque": "Asuz","type": "Pc Portable", "prix": 2}
  )

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
let Prix= data.map( element => {
  return element.prix
})
let Stock= data.map( element => {
  return element.stock
})
let Image= data.map( element => {
  return element.img
})
////////////////////////////////////////////////////


let [userMoney, setUserMoney] = useState({money:20});
let [stock, setStock] = useState({stock: data.stock})
let [price, setprice] = useState({price:Prix})
let Panier=[];

const [orange, setcolor] =useState(true);
const [rouge, setthecolor] =useState(true);
const [isShown, setIsShown] = useState(true);

 let decreaseMoney=()=>{
setUserMoney({userMoney: userMoney - Prix[0]})
  }
 const achat=(props)=>{
alert(userMoney.money - props.prix)
setUserMoney({money: userMoney.money - props.prix})
props.stock = props.stock -1
 }

  
  return (
<div>
  <Header money={userMoney.money}/>
  <div className='articles'>
    {data.map(element =>(
      <Article marque={element.marque} type={element.type} description={element.description} prix={element.prix} stock={element.stock} img={element.img} achat={() => achat(element)}/>
    ))}
  </div>
</div>
  );
}


