import React from 'react'
import Image from '../assets/images/image-rules.svg'
import '../style/rules.css'




class Rules extends React.Component {
    render()
    {
        return <div class="modal" tabindex="-1">
          <div className='topline'><h1>RULES</h1> <span class="close" id="close">&times;</span></div>
              <img src={ Image } alt="" />
      </div>
    }
}
export default Rules