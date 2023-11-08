import React, { useContext } from "react";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import VideocamIcon from "@mui/icons-material/Videocam";
import GroupsIcon from "@mui/icons-material/Groups";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EventIcon from "@mui/icons-material/Event";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import "./Sidebar.css";
import MenuLink from "../menuLink/MenuLink";
import Friends from "../friends/Friends";
import { Users } from "../../data";
import { DarkModeContext } from "./../../Context/darkModeContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import { AirlineSeatReclineNormal, CurrencyRupee, HourglassBottom, Map, Train } from "@mui/icons-material";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <span onClick={() => navigate("/StationMap")}>
        <MenuLink Icon={<Map/>} text="Map" />
        </span>
        <span onClick={() => navigate("/FareComponent")}>
        <MenuLink Icon={<CurrencyRupee />} text="Fare" />
        </span>
        <span onClick={() => navigate("/SeatAvailability")}>
        <MenuLink Icon={< AirlineSeatReclineNormal/>} text="SearAvailability" />
        </span>
        <span onClick={() => navigate("/TrainPNRStatus")}>
        <MenuLink Icon={<HourglassBottom/>} text="PNR Status" />
        </span>
        <span onClick={() => navigate("/TrainDetails")}>
        <MenuLink Icon={<Train />} text="Search Train"/>
        </span>
        
        <span onClick={() => dispatch({ type: "TOGGLE" })}>
          <MenuLink Icon={<Brightness4Icon />} text="Theme" />
        </span>
        <span onClick={() => signOut(auth)}>
          <MenuLink Icon={<ExitToAppOutlinedIcon />} text="Logout" />
        </span>

        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />

        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <Friends key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;