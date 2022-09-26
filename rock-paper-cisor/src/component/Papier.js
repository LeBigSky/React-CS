import React from 'react'
import '../style/papier.css'

class Papier extends React.Component {
    render()
    
    {
        return <div className='paper' onClick={this.props.check} ></div>

    }
}

export default Papier