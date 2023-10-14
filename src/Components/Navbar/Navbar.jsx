import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbarContainer">
        <div className="navbarLeft">
            <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo">RailMedia</span>
            </Link>
            
        </div>
        <div className="navbarCentre">
            <div className="searchBar">
               <SearchIcon className="searchIcon"/>
               <input type="text" 
               placeholder='Search for post or video' 
               className='searchInput'
               />
            </div>
        </div>
        <div className="navbarRight">
            <div className="navbarLink">
                <span className="navbarLinks">HomePage</span>
                <span className="navbarLinks">TimeLine</span>
            </div>
            <div className="navbarIcons">
                <div className="navbarIconItem">
                 <PersonIcon/>
                 <span className="navbarIconBadge">2</span>
                </div>
                <div className="navbarIconItem">
                 <ChatBubbleIcon/>
                 <span className="navbarIconBadge">10</span>
                </div>
                <div className="navbarIconItem">
                 <NotificationsActiveIcon/>
                 <span className="navbarIconBadge">8</span>
                </div>
            </div>
            <Link to="/profile/userId">
            <img src="/assets/person/user.jpg" alt="" className="navbarImg" />
            </Link>
            
        </div>
    </div>
  )
}

export default Navbar