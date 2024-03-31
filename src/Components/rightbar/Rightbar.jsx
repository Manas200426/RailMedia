import React from "react";

import RightBarhome from "../rightbarhome/RightBarHome.jsx"
import ProfileRightBar from "./../profileRightBar/ProfileRightBar";
// import "./rightbar.css";

const Rightbar = ({ profile }) => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <RightBarhome/>}
      </div>
    </div>
  );
};

export default Rightbar;