
import React from 'react'

import '../style/Articles.css'

export default function Article(props) {
  return (
<div className='card' >
    <img src={props.img}alt=""/>
        <div className=''>
            {props.stock >= 2 && // ICI J'UTILISE UNIQUEMENT DE L'AFFICHAGE CONDITIONNEL POUR RENDER MON ARTICLE SELON LES CONDITIONS
            <div style={{ backgroundColor: 'white'}}>
                 <h2 className='Titre'>{props.type} {props.marque}</h2>
                 <p className='Descriptif'>{props.description}</p>
                 <h3 className='Prix'><p>STOCK:</p><span>{props.stock}</span> <p>PRIX:</p><span>{props.prix}</span></h3>
            </div>}
            {props.stock === 1 && // SI IL NE RESTE Q'UN OBJET EN STOCK =>
            <div style={{ backgroundColor: 'orange'}}>
                 <h2 className='Titre'>{props.type} {props.marque}</h2>
                 <p className='Descriptif'>{props.description}</p>
                 <h3 className='Prix'><p>STOCK:</p><span>{props.stock}</span> <p>PRIX:</p><span>{props.prix}</span></h3>
            </div>}
            {props.stock < 1 && // SI IL RESTE MOINS Q'UN OBJET EN STOCK DONC 0 =>
            <div style={{ backgroundColor: 'red'}}>
                 <h2 className='Titre'>{props.type} {props.marque}</h2>
                 <p className='Descriptif'>{props.description}</p>
                 <h3 className='Prix'><p>STOCK:</p><span>{props.stock}</span> <p>PRIX:</p><span>{props.prix}</span></h3>
            </div>}
            {/* SI LE SOLDE USER EST >= AU PRIX => */}
            <div className='card-end-line'> 
            {props.usermoney >= props.prix && <button onClick={props.achat}>Ajouter au panier</button>} 
            </div>
        </div> 
</div>
  );
}

