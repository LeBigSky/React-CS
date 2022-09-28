import React, {useState} from 'react'
import Image from '../assets/images/image-rules.svg'
import '../style/rules.css'
import Rules from './Rules'


class Modal extends React.Component {

    render()
    { 
        return   <div style={{display: this.props.display ? 'block' : 'none'}} id="Modal" class="kodal" onClick={this.props.close}>
  <div class="kodal-content" id="kodal1">
    <div class="kodal-content-div">
    <div class="modal" tabindex="-1">
          <div className='topline'><h1>RULES</h1> <span class="close" onClick={this.props.close} id="close">&times;</span></div>
              <img src={ Image } alt="" />
      </div>
     </div>
  </div>
</div>

    }

}

export default Modal

