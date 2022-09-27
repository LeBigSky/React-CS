import React from 'react'
import Image from '../assets/images/image-rules.svg'
import '../style/rules.css'




class Rules extends React.Component {
    render()
    {
        return <div class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">RULES</h5>
              <button type='' onClick={this.handleCallback} >X</button>
            </div>
            <div class="modal-body">
              <img src={ Image } alt="" />
            </div>
            <div class="modal-footer">
            </div>
          </div>
        </div>
      </div>
    }
}
export default Rules