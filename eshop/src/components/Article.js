import Laptop  from '../assets/img/alienwarePNG.PNG'
import React,{useState} from 'react'

import '../style/Articles.css'

export default function Article(props) {
    let [userMoney, setUserMoney] = useState({money:20});
let [price, setPrice] = useState({price:0});
let [articleStock, setstock] = useState({stock:3});

    let acheter=(props)=>{
       
        if(articleStock.stock > 0){
            setstock({stock: articleStock.stock -1 }) ;
        }
        else{
            alert("Désolé ce produit n'est plus de stock")
        }
          }
          if(articleStock.stock < 1){
            document.querySelector('span').style.backgroundColor='red'
            document.querySelector('button').style.backgroundColor='red'
            document.querySelector('button').innerText='Indisponible'    
        }
  return (
<div className='card'>
    <img src={Laptop}alt=""/>
        <div className=''>
            <h2 className='Titre'>{props.type} {props.marque}</h2>
            <p className='Descriptif'>{props.description}</p>
            <div className='card-end-line'>
                <button onClick={acheter}>Acheter</button>
                <h3 className='Prix'><p>STOCK:</p><span>{articleStock.stock}</span> <p>PRIX:</p><span>14</span></h3>
            </div>
        </div> 
</div>
  );
}

