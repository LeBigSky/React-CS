import React from 'react'
import '../style/header.css'
import logo from '../assets/images/logo.svg'

class Header extends React.Component {
 
    render()
    {
        return <div className='container'>
            <div className='title'>
                <img src={logo} alt="" />
            </div>
            <div className='score'><span>SCORE</span> <h2>{this.props.score}</h2></div>
        </div>
    }
}

export default Header