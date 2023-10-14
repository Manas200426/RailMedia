import React from 'react'
import "./RightBarHome.css"
import Online from '../online/Online'
import {Usersonline} from "../../data"

const RightBarHome = () => {
  return (
    <div className='rightbarhome'>
        <div className="birthdayContainer">
            <img src="/assets/birthdaygifts/gift.png" alt="" className="birthdayImg" />
            <span className="birthdayText"> <b>  Happy BirthDay</b></span>
        </div>
        <img src="/assets/ads/adv.jpg" alt="" className="rightbarAdvert" />
        <span className="rightbarTitle">Online Friends</span>

        <ul className="rightbarfriendList">
            {Usersonline.map((u)=>(
                 <Online key={u.id} onlineuser={u}/>
            ))}
           
        </ul>
    </div>
  )
}

export default RightBarHome