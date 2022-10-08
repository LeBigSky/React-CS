import React from 'react';
import '../style/Header.css';

export default function Header(props) {
    
    return(
    <div className='header'>
        <h1>WHERE IN THE WORLD ?</h1>
        <div className='darkmode'>
            <i className="fa-regular fa-moon"></i>
            <h4>DARK MODE</h4>
        </div>
        

    </div>
    )
}