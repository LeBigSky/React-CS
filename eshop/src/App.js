import Article from './components/Article';
import Header from './components/Header';
import Footer from './components/Footer'
import Paniers from './components/Paniers';
import '../src/style/App.css';
import React, {useState} from 'react';
import data from '../src/assets/data/data.json'


export default function App() {

let [userMoney, setUserMoney] = useState({money:20});

const [panier, setPanier] = useState([]); 

 const achat=(index)=>{
  let article=data.map(element =>(element))
  if (userMoney.money >= article[index].prix && article[index].stock >0){
    setUserMoney({money: userMoney.money - article[index].prix});
    article[index].stock -=1;
    panier.push(article[index]);
    setPanier(panier)
    console.log(panier) 
  }
 }
let supprimer = (index) => {
  console.log(panier)
  let copiePanier = panier;
  console.log(copiePanier)
  panier.splice(index, 1);
  setPanier(copiePanier);
}
  return (
<div>
  <Header money={userMoney.money}/>
  <div className='container'>
      <div className='articles'>
          {data.map((element, index) =>( 
             <Article key={index} marque={element.marque} type={element.type} description={element.description} prix={element.prix} stock={element.stock} img={element.img} achat={() => achat(index)} usermoney={userMoney.money}/>
          ))}
      </div>
      <div className='panier'>
        <h1>VOTRE PANIER CONTIENS :</h1>
        {panier.length === 0 &&
        <h4>ACTUELLEMENT AUCUN ARTICLE </h4>
        }
            {panier.map((element, index) => {
            return (
                    <Paniers key={index} article={element} delete={()=>supprimer(index)} />
                   );
                })}
      </div>
  </div>
  <Footer/>
</div>
  );
}


