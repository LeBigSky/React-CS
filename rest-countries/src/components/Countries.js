import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/Countries.css'
import Card from './Card';


export default function Countries(props) {
    const [data, setData]= useState([])
    // use effect agit lorsque le component est mount #cycle de vie
    useEffect(() => {
        axios.get("https://restcountries.com/v2/all").then((res) => setData(res.data));
    }, [])//callback [] permet de rappeler le code si il y a un event
    
    return(
        <div className='countries'>
                {
                    data.map((pays, index) => (
                <Card key={index} pays={pays} id={index}/>
                    ))};
        </div>
    )
}