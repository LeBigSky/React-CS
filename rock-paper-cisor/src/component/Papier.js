import React from 'react'
import '../style/papier.css'

class Papier extends React.Component {
    cliqued = (event) => {
        this.props.parentCallback(this.props.type)
    }
    render()
    
    {
        return <div className='paper' onClick={this.cliqued} ></div>

    }
}

export default Papier