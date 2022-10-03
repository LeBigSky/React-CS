import React, {useState} from "react";

export default function Exo1() {
let [number, setNumber]= useState({
    nombre: 1,}
)
let upNombre= ()=>{
    setNumber({nombre: number.nombre+1})
}
    return(
<div><h1>EXO 1</h1>
<h1>{number.nombre}</h1>
<button onClick={upNombre}>augmenter le nombre</button></div>

    );
}