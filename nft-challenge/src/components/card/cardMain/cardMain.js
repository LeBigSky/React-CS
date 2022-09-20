import React from "react"
import CardImg from "../cardImg/cardImg"
import CardValue from "../cardValue/cardValue"
import CardVatar from "../cardAvatar/cardAvatar"
import '../card.css'

class Cardtemplate extends React.Component{
render(){
return <div className="CardTemplate">
    <CardImg/>
    <div className="CardTitle"><h2>Equilibrium #3429</h2></div>
    <div className="CardTxt"><p>Our equilibrium promotes balance and calm</p></div>
    <CardValue/>
    <div className="separation"></div>
    <CardVatar/>

</div>
}

}

export default Cardtemplate