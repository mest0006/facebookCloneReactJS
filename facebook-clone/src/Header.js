import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import { AddCircleOutline, ExpandMore, Flag, Forum, NotificationsActive, Person, Storefront, YouTube } from '@material-ui/icons';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
function Header () {
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://1000logos.net/wp-content/uploads/2016/11/fb-logo.jpg"></img>
        <div className="header__input">
          <SearchIcon fontSize="large" />
          <input placeholder="Search Facebook" type="text" />
        </div>
      </div>


      <div className="header__middle">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <Flag fontSize="large" />
        </div>
        <div className="header__option">
          <YouTube fontSize="large" />
        </div>
        <div className="header__option">
          <Storefront fontSize="large" />
        </div><div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar fontSize="large" />
          <h4>Borbalam  </h4>
        </div>
        <IconButton>
          <AddCircleOutline fontSize="large" />
        </IconButton>
        <IconButton>
          <Forum fontSize="large" />
        </IconButton> <IconButton>
          <NotificationsActive fontSize="large" />
        </IconButton> <IconButton>
          <ExpandMore fontSize="large" />
        </IconButton> <IconButton>
          <AddCircleOutline fontSize="large" />
        </IconButton>
      </div>

    </div>
  )

}

export default Header
