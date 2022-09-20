import React from "react";
import Avatar from "../../../assets/images/image-avatar.png"
import '../card.css'

class CardVatar extends React.Component{
    state = {
        color: 'hsl(0, 0%, 100%)'
      }
      onChange = () => {
        if(this.state.color=='hsl(0, 0%, 100%)'){
          this.setState({ color: 'hsl(178, 100%, 50%)' });  
        }
        else{
            this.setState({ color: 'hsl(0, 0%, 100%)' }); 
        }
         
      }
    render(){
        return <div className="AvatarLine"><img src={Avatar} alt="" className="Avatar" />
        <p>Creation of<span style={{ color: this.state.color }} onClick={this.onChange}>Jules Wyvern</span></p></div>
    }
}

export default CardVatar