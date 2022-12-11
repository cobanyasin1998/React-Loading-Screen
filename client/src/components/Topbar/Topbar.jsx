import React from "react";
import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";

import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";

export const Topbar = () => {
  return (
    <>
      <div className="topbar">
        <div className="top-left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png"
            className="logo" alt="Logo"
          />
        </div>
        <div className="top-center">
          <div className="top-search">
            <input type="text" placeholder="Search" />
            <div className="top-search-icon-container">
              <SearchIcon className="top-search-icon" />
            </div>
            <MicIcon />
          </div>
        </div>
        <div className="top-left">
          <VideoCallIcon className="top-icon" />
          <AppsIcon className="top-icon" />
          <NotificationsIcon className="top-icon" />
          <img className="top-img" src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt=""/>
        </div>
      </div>
    </>
  );
};
