import React from 'react'
import '../style/pierre.css'

class Pierre extends React.Component {
    cliqued = (event) => {
        this.props.parentCallback(this.props.type)
    }
    render()
    {
        return <div className='pierre' onClick={this.cliqued}></div>

    }
}

export default Pierre