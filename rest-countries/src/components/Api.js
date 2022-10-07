import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Countrycard from './Countrycard'


export default function Api() {
const[sortedpays, setSorted]= useState([])
const [pays, setPays]= useState([])
const [tour, setTour]= useState(true)


useEffect(()=>{
    if(tour){
         axios.get("https://restcountries.com/#api-endpoints-v2/all?").then((res) => {
        setPays(res.pays)
        });
    } 
    })

const LesPays = ()=> {
   const objetPays = Object.keys(pays).map ((index) => pays(index)) 
}
return(
    <div>
        {pays.map( (element, index)=> (
      <Countrycard key={index} pays={element}/>  
    )
    )} 
    </div>
   
    
)
}
