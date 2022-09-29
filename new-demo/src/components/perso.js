import React from "react";
import '../App.css'
class Perso extends React.Component {


    render(){
        return(
            <div><h1>Je m'appelle <span>{this.props.stat.Gary.nom}</span>, j'ai {this.props.stat.Gary.age} ans et j'habite X et je suis appelé du composant Perso.js</h1>
            <div><button className="bouton" onClick={this.props.func}>CLICK HERE</button></div>
            </div>
        )
    }
}

export default Perso