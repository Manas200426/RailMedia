import React from 'react'
import "./rightbar.css"
import RightBarHome from '../rightbarhome/RightBarHome';
import ProfileRightBar from '../profileRightBar/ProfileRightBar';

const Rightbar = ({profile}) => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
       { profile? <ProfileRightBar/> :<RightBarHome/>} 
      </div>
    </div>
  )
}

export default Rightbar;