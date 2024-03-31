import React, { useContext } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { AuthContext } from "./../../Context/AuthContext"
import NotificationsIcon from "@mui/icons-material/Notifications";

const Navbar = () => {
    const { currentUser } = useContext(AuthContext);
    return (
      <div className="navbarContainer">
        <div className="navbarLeft">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">RailMedia</span>
          </Link>
        </div>
        <div className="navbarCenter">
          <div className="searchBar">
            <SearchIcon className="searchIcon" />
            <input
              type="text"
              placeholder="Search for friends post or video"
              className="searchInput"
            />
          </div>
        </div>
        <div className="navbarRight">
          <div className="navbarLinks">
            <span className="navbarLink">Homepage</span>
            <span className="navbarLink">Timeline</span>
          </div>
          <div className="navbarIcons">
            <div className="navbarIconItem">
              <PersonIcon />
              <span className="navbarIconBadge">2</span>
            </div>
            <div className="navbarIconItem">
              <ChatBubbleIcon />
              <span className="navbarIconBadge">10</span>
            </div>
            <div className="navbarIconItem">
              
              <span className="navbarIconBadge">8</span>
              <Link to="/notifications" className="navbarLink"><NotificationsActiveIcon /></Link>
            </div>
          </div>
          <Link to={`/profile/${currentUser.displayName}`}>
            <img src={currentUser.photoURL} alt="" className="navbarImg" />
          </Link>
        </div>
      </div>
    );
  };

export default Navbar