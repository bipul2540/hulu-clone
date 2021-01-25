import React, { useState } from "react";
import "./../style/Header.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  const [burgerActive, setBurgerActive] = useState(false);

  return (
    <div className="header">
      <div
        className={
          !burgerActive
            ? "header__icons"
            : "header__icons header__icons--active"
        }
      >
        <div className="header__icon header__icon--active">
          <HomeIcon />
          <p>Home</p>
        </div>
        <div className="header__icon">
          <FlashOnIcon />
          <p>Trending</p>
        </div>
        <div className="header__icon">
          <LiveTvIcon />
          <p>Verified</p>
        </div>
        <div className="header__icon">
          <VideoLibraryIcon />
          <p>Collections</p>
        </div>
        <div className="header__icon">
          <SearchIcon />
          <p>Search</p>
        </div>
        <div className="header__icon">
          <PersonOutlineIcon />
          <p>Account</p>
        </div>
      </div>
      <div
        className="header__burger"
        onClick={() => setBurgerActive(!burgerActive)}
      >
        <MenuIcon />
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
