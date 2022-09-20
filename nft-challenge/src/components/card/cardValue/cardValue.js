import Ether from '../../../assets/images/icon-ethereum.svg'
import Clock from '../../../assets/images/icon-clock.svg'
import React from 'react'

class CardValue extends React.Component{
    render(){
        return <div className='ValueLine'>
                    <div className='ValueEther'><img src={Ether} alt="" /><h4>0.041 ETH</h4></div>
                    <div className='Time'><img src={Clock} alt="" /><p>3 days left</p></div>
                </div>
    }
}

export default CardValue