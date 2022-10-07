import Article from './components/Article';
import Header from './components/Header';
import Footer from './components/Footer'
import Paniers from './components/Paniers';
import '../src/style/App.css';
import React, {useState} from 'react';
import data from '../src/assets/data/data.json'


export default function App() {

let [userMoney, setUserMoney] = useState({money:20});
let [panier, setPanier] = useState([]); 

 const achat=(index)=>{
  
  let article=data.map(element =>(element))
  let idpanier=panier.indexOf(article[index])
  if (userMoney.money >= article[index].prix && article[index].stock >0 &&  panier[0] != article[index] && panier[1] != article[index] && panier[2] != article[index]){
    setUserMoney({money: userMoney.money - article[index].prix});
    article[index].quantite+= 1;
    article[index].stock -=1;
    panier.push(article[index]);
    setPanier(panier)
    console.log(panier) 
  }

 }
let supprimer = (index) => {
  let copiePanier = [...panier];
  let article=data.map(element =>(element))
  ;
  let value=article[article.indexOf(copiePanier[index])].prix;
  console.log(value)
  console.log(article[article.indexOf(copiePanier[index])].quantite);

  if(article[article.indexOf(copiePanier[index])].quantite > 0){
    let quantie=article[article.indexOf(copiePanier[index])].quantite
    console.log(quantie)
   let newvalue= value * quantie 
    setUserMoney({money: userMoney.money + newvalue })
    article[article.indexOf(copiePanier[index])].quantite= quantie - quantie
    article[article.indexOf(copiePanier[index])].stock= article[article.indexOf(copiePanier[index])].stock + quantie
  }

  copiePanier.splice(index, 1);
  setPanier(copiePanier);
 
}
let augment=(index)=>{
  let article=data.map(element =>(element))
  let copiePanier = [...panier];
  if (userMoney.money >= article[article.indexOf(copiePanier[index])].prix && article[article.indexOf(copiePanier[index])].stock >= 1){
  
  article[article.indexOf(copiePanier[index])].quantite++
  let value=article[article.indexOf(copiePanier[index])].prix;
  article[article.indexOf(copiePanier[index])].stock--
  console.log(value)
  setUserMoney({money: userMoney.money - value })
  }
}
let decrease=(index)=>{
  let article=data.map(element =>(element))
  let copiePanier = [...panier];
  if (article[article.indexOf(copiePanier[index])].quantite > 0){
  article[article.indexOf(copiePanier[index])].quantite--
  article[article.indexOf(copiePanier[index])].stock++
  let value=article[article.indexOf(copiePanier[index])].prix;
  console.log(value)
  setUserMoney({money: userMoney.money + value })
  copiePanier.splice(index, 1);
  }
}
  return (
<div>
  <Header money={userMoney.money}/>
  <div className='container'>
      <div className='articles'>
          {data.map((element, index) =>( 
             <Article key={index} marque={element.marque} type={element.type} description={element.description} prix={element.prix} stock={element.stock} img={element.img} achat={() => achat(index)} usermoney={userMoney.money} quantite={element.quantite}/>
          ))}
      </div>
      <div className='panier'>
        <h1>VOTRE PANIER CONTIENS :</h1>
        {panier.length === 0 &&
        <h4>ACTUELLEMENT AUCUN ARTICLE </h4>
        }
            {panier.map((element, index) => {
            return (
                    <Paniers key={index} article={element} delete={()=>supprimer(index)} augment={() => augment(index)} decrease={() =>decrease(index)} />
                   );
                })}
      </div>
  </div>
  <Footer/>
</div>
  );
}


