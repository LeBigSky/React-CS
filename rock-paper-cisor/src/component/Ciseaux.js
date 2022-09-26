import React from 'react'
import '../style/ciseaux.css'

class Ciseaux extends React.Component {
    cliqued = (event) => {
        this.props.parentCallback(this.props.type)
    }
    render()
    {
        return <div className='scissors' onClick={this.cliqued}></div>

    }
}

export default Ciseaux