import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, IconButton } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {
  Add,
  ExpandMore,
  Flag,
  Forum,
  Home,
  StorefrontOutlined,
  SubscriptionsOutlined,
  SupervisedUserCircle,
} from "@material-ui/icons";
import { useStateContext } from "../context/StateContext";

const Header = () => {
  const [{ user }, dispatch] = useStateContext();
  return (
    <div className="header">
      <div className="header__left">
        <img src={user.photoURL} />
        <SearchIcon />
        <input type="text" placeholder="Search for a user" />
      </div>
      <div className="header__middle">
        <div className="header__option header__option--active">
          <IconButton>
            <Home fontSize="large" />
          </IconButton>
        </div>
        <div className="header__option">
          <IconButton>
            <Flag fontSize="large" />
          </IconButton>
        </div>
        <div className="header__option">
          <IconButton>
            <SubscriptionsOutlined fontSize="large" />
          </IconButton>
        </div>
        <div className="header__option">
          <IconButton>
            <StorefrontOutlined fontSize="large" />
          </IconButton>
        </div>
        <div className="header__option">
          <IconButton>
            <SupervisedUserCircle fontSize="large" />
          </IconButton>
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <IconButton>
            <Avatar src={user.photoURL} />
          </IconButton>
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <Add />
        </IconButton>
        <IconButton>
          <Forum />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <ExpandMore />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
