import React from 'react'
import '../style/header.css'

class Header extends React.Component {
 
    render()
    {
        return <div className='container'>
            <div className='title'>
                <h2>ROCK</h2>
                <h2>PAPER</h2>
                <h2>SCISSORS</h2>    
            </div>
            <div className='score'></div>
        </div>
    }
}

export default Header