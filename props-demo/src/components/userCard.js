import React from "react";
import '../css/userCard.css';
import avatar from '../assets/images/image-jeremy.png'

class UserCard extends React.Component{
    render(){
        return  <div className="usercardOutline">
                     <div className="usercardDown">
                        
                        <div className="usercardUp">
                        <img src={avatar} alt="" className="avatar"/>
                        <p>Report for</p>
                        <h2>Username</h2>
                         
                        </div>
                        <ul>
                            <li>Daily</li>
                            <li>Weekly</li>
                            <li>Monthly</li>
                        </ul>
                     </div>
                     
                </div>
        

    }
}

export default UserCard