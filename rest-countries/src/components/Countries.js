import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/Countries.css'

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
                        <div className='countrycard'>
                            <img src={pays.flag} alt="" />
                            <div className='countrydata'>
                                <h2>{pays.name}</h2>
                                <h4>Population: {pays.population}</h4>
                                <h4>Region:{pays.region}</h4>
                                <h4>Capitale: {pays.capital}</h4>
                            </div>
                            

                        </div>
                    
                    ))};
        </div>
    )
}