
import React from 'react';
import logo from '../assets/img/gearUp.png'
import '../style/Header.css'

export default function Header(props) {
  return (
<div className='header'>
    <div className='firstline'><img src={logo} alt="" /><h1>Gear Up</h1></div>
    <div className='link'><a href="">PRODUIT</a><a href="">SOLDES</a><a href="">REFURBISHED</a><a href="">VOTRE SOLDE: {props.money} k</a></div>
</div>
  );
}

