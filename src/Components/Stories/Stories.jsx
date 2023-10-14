import React from 'react'
import "./stories.css"
import Storycard from '../storycard/Storycard'
import {Users} from "../../data"

const Stories = () => {
  return (
    <div className= " stories">
        <div className="storyCard">
          <div className="overlay"></div>
            <img src="/assets/person/user.jpg " alt="" className="storyProfile"/>
            <img src="/assets/person/user.jpg " alt="" className="storybackground"/>
            <img src="/assets/person/upload.jpg " alt="" className="storyadd"/>
            <span className='text'>Prayag</span>
        </div>

        {Users.map((u)=>(
            <Storycard key ={u.id} user={u}/>
        ))}
       
    </div>

  )
}

export default Stories