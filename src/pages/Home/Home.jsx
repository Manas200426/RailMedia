import React from 'react'
import "./Home.css"
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
import Rightbar from '../../Components/rightbar/Rightbar'

const Home = () => {
  return (
    <div className="home">
        <Navbar/>
        <div className="homeContainer">
          <Sidebar/>
          <Feed/>
          <Rightbar/>
        </div>
    </div>
  )
}

export default Home