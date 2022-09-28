import React, {useState} from 'react'
import Modal from './Modal'

import '../style/rules.css'




class Rules extends React.Component {
  state = {
    displayed: false
  }
open =()=>{
this.setState({displayed: true})
console.log(this.state.displayed)
}
close=()=>{
  this.setState({displayed:false})
}
    render()
    {
        return <div><Modal display={this.state.displayed} close={this.close} />
        <div className='rules'><button onClick={this.open}>RULES</button></div>
      </div> 
    }
}
export default Rules