
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
              <img src={props.article.img} alt="" />
              <h4 className="name">{props.article.marque}</h4>
              <p className="price"><span className="font-weight-bold">Prix :</span> {props.article.prix}</p>
              <button  className="button" onClick={props.delete}>Supprimer</button>
          </div>
        </div>
      </div>
    )
  };
