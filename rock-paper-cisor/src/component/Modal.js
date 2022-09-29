import React, {useState} from 'react'
import Image from '../assets/images/image-rules.svg'
import '../style/rules.css'
import Rules from './Rules'

class Modal extends React.Component {
    render()
    { 
        return   <div style={{display: this.props.display ? 'block' : 'none'}} id="Modal" className="kodal" onClick={this.props.close}>
  <div className="kodal-content" id="kodal1">
    <div className="kodal-content-div">
    <div className="modal" tabIndex="-1">
          <div className='topline'><h1>RULES</h1> <span className="close" onClick={this.props.close} id="close">&times;</span></div>
              <img src={ Image } alt="" />
      </div>
     </div>
  </div>
</div>
    }
}

export default Modal

