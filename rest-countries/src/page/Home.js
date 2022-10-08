import React from 'react';
import Countries from "../components/Countries"
import Select from '../components/Select';
import "../style/Home.css"

export default function Home(props) {
    
    return(
        <div className='home'>
        <Select/>    
        <Countries/>
        </div>
    )
} 