import React, { useContext } from 'react'
import "./Sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideocamIcon from '@mui/icons-material/Videocam';
import PeopleIcon from '@mui/icons-material/People';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EventIcon from '@mui/icons-material/Event';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuLink from '../menuLink/MenuLink';
import Friends from '../friends/Friends';
import {Users} from "../../data";
import { DarkModeContext } from '../../Context/darkModeContext';



const Sidebar = () => {
  const  {dispatch} = useContext(DarkModeContext)
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
            <MenuLink Icon={<RssFeedIcon/>} text="Feed"/>
            <MenuLink Icon={<ChatIcon/>} text="Chat"/>
            <MenuLink Icon={<VideocamIcon/>} text="Video"/>
            <MenuLink Icon={<PeopleIcon/>} text="Friends"/>
            <MenuLink Icon={<BookmarkIcon/>} text="Bookmark"/>
            <MenuLink Icon={<ShoppingCartIcon/>} text="MarketPlace"/>
            <MenuLink Icon={<EventIcon/>} text="Event"/>
            <span onClick={()=>dispatch({type: "TOGGLE"})}>
            <MenuLink Icon={<Brightness6Icon/>} text="Mode"/>
            </span>
           
            <MenuLink Icon={<LogoutIcon/>} text="Logout"/>

            <button className="sideBarButton">Show More</button>
            <hr className="sidebarHr" />

            <ul className="sidebarFriendList">

              {Users.map(u=>(
                 <Friends key={u.id} user={u}/>
              ))}
              
            </ul>

      </div>
    </div>
  )
}

export default Sidebar;