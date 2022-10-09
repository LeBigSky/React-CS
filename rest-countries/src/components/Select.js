import React from 'react';
import "../style/Select.css"

export default function Select(props) {
    
    return(
    <div className='selection'>
        <div className='inputplace'>
            <span>&#x1F50D;&#xFE0E;</span>
            <input type="text" placeholder="Rechercher un pays..."/> 
        </div>
        <select name="Filter by region" id="Filtrer par continent">
            <option className='filter'>Filtrer par region</option>
            <option>Afrique</option>
            <option>Amerique</option>
            <option>Asie</option>
            <option>Europe</option>
            <option>Oceanie</option>
        </select>
    </div>
    )
}