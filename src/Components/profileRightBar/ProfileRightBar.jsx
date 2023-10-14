import React from 'react'
import "./ProfileRightBar.css"
import { Link } from 'react-router-dom'

const ProfileRightBar = () => {
  return (
    <div className='profileRightBar'>
        <div className="ProfileRightBarHeading">
            <span className="ProfileRightBarTitle">
                User Information
            </span>
            <Link to="/profile/userId/edit" style={{textDecoration:"none"}}>
            <span className="editButton">edit button</span>
            </Link>
           
        </div>

        <div className="profileRightBarInfo">
            <div className="profileRightBarInfoItem">
                <span className="profileRightBarInfoKey">Email:</span>
                <span className="profileRightBarInfoValue">prayag@gmail.com</span>   
            </div>
            <div className="profileRightBarInfoItem">
                <span className="profileRightBarInfoKey">Phone No:</span>
                <span className="profileRightBarInfoValue">1234567893</span>   
            </div>
            <div className="profileRightBarInfoItem">
                <span className="profileRightBarInfoKey">Address:</span>
                <span className="profileRightBarInfoValue">Kalyan East</span>   
            </div>
            <div className="profileRightBarInfoItem">
                <span className="profileRightBarInfoKey">Country:</span>
                <span className="profileRightBarInfoValue">India</span>   
            </div>
            <div className="profileRightBarInfoItem">
                <span className="profileRightBarInfoKey">Relationship:</span>
                <span className="profileRightBarInfoValue">Married</span>   
            </div>
        </div>
        <h4 className="profileRightBarTitle">Close Friends</h4>
        <h4 className="profileRightBarFollowings">
            <div className="profileRightBarFollowing">
                <img src="/assets/person/friend1.jpg" alt="" className="profileRightBarFollowingImg" />
                <span className="profileRightBarFollowingName">Janet</span>
            </div>
            <div className="profileRightBarFollowing">
                <img src="/assets/person/friend2.jpg" alt="" className="profileRightBarFollowingImg" />
                <span className="profileRightBarFollowingName">Janet</span>
            </div>
            <div className="profileRightBarFollowing">
                <img src="/assets/person/friend3.jpg" alt="" className="profileRightBarFollowingImg" />
                <span className="profileRightBarFollowingName">Janet</span>
            </div>
            <div className="profileRightBarFollowing">
                <img src="/assets/person/friend4.jpg" alt="" className="profileRightBarFollowingImg" />
                <span className="profileRightBarFollowingName">Janet</span>
            </div>
            <div className="profileRightBarFollowing">
                <img src="/assets/person/friend6.jpg" alt="" className="profileRightBarFollowingImg" />
                <span className="profileRightBarFollowingName">Janet</span>
            </div>
            <div className="profileRightBarFollowing">
                <img src="/assets/person/friend6.jpg" alt="" className="profileRightBarFollowingImg" />
                <span className="profileRightBarFollowingName">Janet</span>
            </div>

        </h4>
    </div>
  )
}

export default ProfileRightBar