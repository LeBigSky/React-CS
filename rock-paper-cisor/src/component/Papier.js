import React from 'react'
import '../style/papier.css'

class Papier extends React.Component {
     Hola() {
        alert('hola')
     }
    render()
    {
        return <div className='paper' onClick={this.Hola}></div>

    }
}

export default Papier