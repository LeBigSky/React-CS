import React from 'react'
import '../style/pierre.css'

class Pierre extends React.Component {
     Hola() {
        alert('hola')
     }
    render()
    {
        return <div className='pierre' onClick={this.Hola}></div>

    }
}

export default Pierre