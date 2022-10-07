
import React from 'react';
import logo from '../assets/img/gearUp.png'
import '../style/Header.css'

export default function Header(props) {
  return (
<div className='header'>
    <div className='firstline'><img src={logo} alt="" /><h1>Gear Up</h1><h4>&#10024;&#10008;&#10008;&#10008;</h4></div>
    <div className='link'><a href="">PRODUIT</a><a href="">SOLDES</a><a href="">REFURBISHED</a><a id='solde' href="">SOLDE : {props.money} €</a></div>
</div>
  );
}

