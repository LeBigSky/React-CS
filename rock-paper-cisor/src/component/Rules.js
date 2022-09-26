import React from 'react'
import '../style/rules.css'

class Rules extends React.Component {
     Hola() {
        alert('hola')
     }
    render()
    {
        return <div className='pierre' onClick={this.Hola}></div>

    }
}
export default Rules