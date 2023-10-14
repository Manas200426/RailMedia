import React from 'react'
import "./Profile.css"
import Navbar from "../../Components/Navbar/Navbar"
import Sidebar from "../../Components/Sidebar/Sidebar" 
import Feed from './../../Components/Feed/Feed'
import Rightbar from '../../Components/rightbar/Rightbar'

const Profile = () => {
  return (
    <div className='profile'>
        <Navbar/>
        <div className="profileWrapper">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src="/assets/profileCover/profilecover.jpg"
                         alt="" className='profileCoverImg' 
                         />
                         <img src="/assets/person/user.jpg"
                          alt="" 
                          className="profileUserImg" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Prayag Chavan</h4>
                        <span className="profileRightBottom">Hi Friend!</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed/>
                    <Rightbar profile/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile