import React from "react";
import '../css/userCard.css';
import avatar from '../assets/images/image-jeremy.png'

class UserCard extends React.Component{
   
    render()
   
    { function callz() {
    alert('yup')
   }
        return  <div className="usercardOutline">
                     <div className="usercardDown">
                        
                        <div className="usercardUp">
                        <img src={avatar} alt="" className="avatar"/>
                        <div className="usertitle">
                             <h2><span>Report for</span> Jeremy Robson</h2>
                        </div>
                        </div>
                            <a className="schedule" onClick={callz}>Daily</a>
                            <a className="schedule">Weekly</a>
                            <a className="schedule">Monthly</a> 
                     </div>
                     
                </div>
        

    }
}

export default UserCard