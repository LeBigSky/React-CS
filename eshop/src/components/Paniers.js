
import React from 'react';
import '../style/Panier.css'
import Article from '../components/Article';

export default function Panier(props) {
 let handleclick=()=>{
    alert(props.panier[0])
    console.log(props.panier)
  }

    return (
      <div>
        <div className="panier">
          <div className='article'>
              <img className='img' src={props.article.img} alt="" />
              
              <div className='article-side'><h4 className="name">{props.article.marque} {props.article.type}</h4>
               < p className="price"><span className="font-weight-bold">Prix :</span> {props.article.prix}</p> 
              <p className='quantite'> Quantité :{props.article.quantite}</p>
              </div>
              <button className='butplus' onClick={props.augment}>+</button>
              <button className='butminus' onClick={props.decrease}>-</button>
              <button  className="button" onClick={props.delete}>Supprimer</button>
          </div>
          
        </div>
      </div>
    )
  };
