import React, {useRef} from 'react'
import Image from '../assets/images/image-rules.svg'
import '../style/rules.css'


class Modal extends React.Component {
    state = {
        displayed: true,
    }
    close =()=> {
        this.setState({displayed: false})
    }
    open =()=>{
         this.props.open()
        this.setState({displayed: true})
       
    }
    render()
    {
        return   <div style={{display:  this.state.displayed ? 'block' : 'none'}} id="Modal" class="kodal">
  <div class="kodal-content" id="kodal1">
    <div class="kodal-content-div">
    <div class="modal" tabindex="-1">
          <div className='topline'><h1>RULES</h1> <span class="close" onClick={this.close} id="close">&times;</span></div>
              <img src={ Image } alt="" />
      </div>
     </div>
  </div>
</div>

    }

}

export default Modal

