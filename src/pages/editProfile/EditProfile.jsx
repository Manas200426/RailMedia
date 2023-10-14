import React from 'react'
import "./EditProfile.css"
import Navbar from "../../Components/Navbar/Navbar"
import Sidebar from "../../Components/Sidebar/Sidebar"
import { DriveFolderUploadOutlined } from '@mui/icons-material'

const EditProfile = () => {
  return (
    <div className='editProfile'>
        <Navbar/>
        <div className="editProfileWrapper">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src="/assets/profileCover/profilecover.jpg"
                         alt="" className="profileCoverImg" 
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
                <div className="editprofileRightBottom">
                    <div className="top">
                        <h1>Edit User Profile </h1>
                        </div>
                    <div className="bottom">
                        <div className="left">
                            <img src="/assets/profileCover/DefaultProfile.jpg" alt="" className='img' />
                        </div>
                        <div className="right">
                            <form className='form'>
                            <div className="formInput">
                                <label htmlFor="file" className='label'>
                                    Image: <DriveFolderUploadOutlined className='icon'/>
                                </label>
                                <input type="file" id='file' className='input' style={{display:"none"}}/>
                            </div>

                            <div className="formInput">
                                <label >Name</label>
                                <input type="text" placeholder='Prayag Chavan' className='input'/>
                            </div>
                            <div className="formInput">
                                <label >Email:</label>
                                <input type="email" placeholder='Prayag_Chan' className='input'/>
                            </div>
                            <div className="formInput">
                                <label >Name</label>
                                <input type="text" placeholder='prayagchavan@gmail.com' className='input'/>
                            </div>
                            <div className="formInput">
                                <label >Phone</label>
                                <input type="text" placeholder='+4 123 456 789' className='input'/>
                            </div>
                            <div className="formInput">
                                <label >Address</label>
                                <input type="text" placeholder='Saket Collage' className='input'/>
                            </div>
                            <div className="formInput">
                                <label >Country</label>
                                <input type="text" placeholder='India' className='input'/>
                            </div>
                            <button type='submit' className='updateButton'>
                                Update Profile 
                            </button>
                            </form>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditProfile