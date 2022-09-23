import React from "react";
import '../css/userCard.css';
import avatar from '../assets/images/image-jeremy.png'




function UserCard(props) {
     return  <div className="usercardOutline">
                    <div className="usercardDown">
                         <div className="usercardUp">
                              <img src={avatar} alt="" className="avatar"/>
                         <div className="usertitle">
                              <h2><span>Report for</span> Jeremy Robson</h2>
                         </div>
                         </div>
                         <div className="links">
                              <a className="schedule" onClick={() => props.changeTime('day')}>Daily</a>
                              <a className="schedule" onClick={() => props.changeTime('week')}>Weekly</a>
                              <a className="schedule" onClick={() => props.changeTime('month')}>Monthly</a> 
                         </div>
                    </div>
               </div>
}

export default UserCard;
