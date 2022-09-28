import React from 'react'
import Modal from './Modal'

import '../style/rules.css'




class Rules extends React.Component {
openParent =()=>{
this.open(this.props.type)
}
    render()
    {
        return <div><Modal open='true'/>
        <div className='rules'><button type='open' onClick={this.openParent}>RULES</button></div>
      </div> 
    }
}
export default Rules