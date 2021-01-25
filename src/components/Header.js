import React from "react";
import "./../style/Header.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

function Header() {
  return (
    <div className="header">
      <div className="header__icons">
        <HomeIcon />
        <FlashOnIcon />
        <LiveTvIcon />
        <VideoLibraryIcon />
        <SearchIcon />
        <PersonOutlineIcon />
      </div>
      <div className="header__image">
        <img
          src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png?fit=1280%2C680"
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
