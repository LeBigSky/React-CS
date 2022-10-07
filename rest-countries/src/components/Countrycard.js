import React from 'react';

export default function Card(props) {
    
    return(
        <div className='card'>
            <img src="" alt="" />
            <div className='container'></div>
            <ul>
                <li>{props}</li>
                <li></li>
                <li></li>
            </ul>

        </div>
    )
}