import React from "react";

import "./rightbar.css";
import ProfileRightBar from "./../profileRightBar/ProfileRightBar";
import Rightbarhome from "../rightbarhome/Rightbarhome";

const Rightbar = ({ profile }) => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <Rightbarhome/>}
      </div>
    </div>
  );
};

export default Rightbar;