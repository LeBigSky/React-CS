import React from 'react'
import '../style/ciseaux.css'

class Ciseaux extends React.Component {
     Hola() {
        alert('hola')
     }
    render()
    {
        return <div className='scissors' onClick={this.Hola}></div>

    }
}

export default Ciseaux