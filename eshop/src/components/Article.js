
import React,{ useState } from 'react'

import '../style/Articles.css'

export default function Article(props) {

let [price, setPrice] = useState({price:props.prix});
let [articleStock, setstock] = useState({stock: props.stock});
const [orange, setcolor] =useState(true);
const [rouge, setthecolor] =useState(true);
const [isShown, setIsShown] = useState(true);


 
    let Setcolor=(props)=>{

    
        if(props>= 1){
            props.stock=Number(props.stock);
            setstock({stock: props.stock -1 }) ;
        }
        else if(props < 3){
            setcolor(current => !current);
        }
        else if (props< 2){
            setIsShown(current => !current);
            setthecolor(current => !current)
        }
    }
   
  return (
    
<div className='card' style={{backgroundColor: orange ? rouge? 'white' : 'red' : 'orange'}}>
 
    <img src={props.img}alt=""/>
        <div className=''>
            <h2 className='Titre'>{props.type} {props.marque}</h2>
            <p className='Descriptif'>{props.description}</p>
            <div className='card-end-line'>
                <button style={{display: isShown ? 'block' : 'none'}} onClick={props.achat}>Ajouter au panier</button>
                <h3 className='Prix'><p>STOCK:</p><span>{props.stock}</span> <p>PRIX:</p><span>{props.prix}</span></h3>
            </div>
        </div> 
</div>
  );
}

