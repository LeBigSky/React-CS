import React from 'react'
import '../style/pierre.css'

class Pierre extends React.Component {
     Hola() {
        alert(this.props.type)
     }
    render()
    {
        return <div className='pierre' onClick={this.Hola(this.props)}></div>

    }
}

export default Pierre