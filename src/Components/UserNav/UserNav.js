import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import * as actions from "../../store/action/index";
import { Link } from "react-router-dom";
import {useHistory} from 'react-router-dom' ;
import ChatBoot from "../ChatBoot/ChatBoot";
import { NoEncryption } from "@material-ui/icons";

const UserNav = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.rootReducer.username);
  const history = useHistory();
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = (e) => {
    dispatch(actions.userLogout());
    e.preventDefault();
    history.push("/") ;
  };
  useEffect(() => {
    console.log(localStorage.getItem('user'));
  }, [user]); 

  return (
    <div className="row">
      <div className="user-img-nav col">
        <img src="https://chitwashop.com/img/avatar/img-5.jpg" alt />
      </div>

      <div className="dropdown col" style={{ marginLeft: "-3rem" }}>
        <button
          className="btn  dropdown-toggle  nameuserbtn "
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
              {user.username}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{
                width:"200px !important"
              }}>
          <Link className="dropdown-item usermenu-nav" to={"/dashboard"}>
            <DashboardIcon
              style={{
                fontSize: "2rem",
                marginRight: "0.5rem",
                marginBottom: "0.5rem",
                color: "#808080",
              }}
            />
            Dashboard
          </Link>
          <Link to="/dashboard" className="dropdown-item usermenu-nav">
            <PersonOutlineIcon
              style={{
                fontSize: "2rem",
                marginRight: "0.5rem",
                marginBottom: "0.5rem",
                color: "#808080",
              }}
            />
            My Profile
          </Link>
          <ChatBoot />
          <Link className="dropdown-item usermenu-nav" to={"/dashboard/orders"}>
            <PlaylistAddCheckIcon
              style={{
                fontSize: "2rem",
                marginRight: "0.5rem",
                marginBottom: "0.5rem",
                color: "#808080",
              }}
            />
            Orders List
          </Link>
          <a
            className="dropdown-item usermenu-nav"
            style={{ borderTop: "0.1px solid #828182" }}
            onClick={handleLogout} 
          >
            <ExitToAppIcon
              style={{
                fontSize: "2rem",
                marginRight: "0.5rem",
                marginBottom: "0.5rem",
                color: "#808080",
              }}
            />
            Logoutt
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserNav;
