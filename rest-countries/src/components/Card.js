import React from 'react';
import '../style/Card.css';



export default function Card(props) {
let handleclick=(props)=>{

}

    return(
        <div className='countrycard' onClick={()=>handleclick(props.id)}>
        <img src={props.pays.flag} alt={"drapeau " +props.pays.translations.fr}  />
        <div className='countrydata'>
            <h2>{props.pays.translations.fr}</h2>
            <h4>Population: {props.pays.population.toLocaleString()}</h4>
            <h4>Region:{props.pays.region}</h4>
            <h4>Capitale: {props.pays.capital}</h4>
        </div>
    </div>
    )
}