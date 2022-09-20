// import Equilibrium from '../../../assets/images/image-equilibrium.jpg'  

import React from 'react'
import '../card.css'

class CardImg extends React.Component{
    render(){
        return <div className='overimg'><div className='CardImg'></div></div> 
        // Je voulais utiliser une variable(chemin) sur une <img> mais pour simuler l'overlay j'ai préféré utilisé div + background-img
    }
}

export default CardImg