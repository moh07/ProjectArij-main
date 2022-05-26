import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../store/action/index";
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from "reactstrap"
import icon2 from "../../assets/Images/admin-user.png";

const NavbarDashboard = () => { 
  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('user'));
  const [userDropOpen, setUserDropOpen] = useState(false);
  console.log({userDropOpen})
  const handleLogout = () => {
   dispatch(actions.userLogout());
   history.push("/") ;
    
  };
  return (
    <div className="main-header">
      <div className="logo-header">
        <Link to={"/"} style={{ textDecoration: "non", color: "black" }}>MAFI Dashboard</Link>

        <button
          className="navbar-toggler sidenav-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="collapse"
          aria-controls="sidebar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <button className="topbar-toggler more">
          <i className="la la-ellipsis-v"></i>
        </button>
      </div>
      <nav className="navbar navbar-header navbar-expand-lg">
        <div className="container-fluid">
          {/* <form className="navbar-left navbar-form nav-search mr-md-3" action="">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search ..."
                className="form-control"
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  <i className="la la-search search-icon"></i>
                </span>
              </div>
            </div>
          </form> */}
          <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
            <li className="nav-item dropdown hidden-caret nav-link">
              <a
                className="nav-link "
                
              >
                <Link to={"/messages"}>
                <i className="la la-envelope"></i>
                </Link>
              </a>
              
            </li>
            {/* <li className="nav-item dropdown hidden-caret">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="la la-bell"></i>
                <span className="notification">3</span>
              </a>
              <ul
                className="dropdown-menu notif-box"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <div className="dropdown-title">You have 4 new notification</div>
                </li>
                <li>
                  <div className="notif-center">
                    <a href="#">
                      <div className="notif-icon notif-primary">
                        {" "}
                        <i className="la la-user-plus"></i>{" "}
                      </div>
                      <div className="notif-content">
                        <span className="block">New user registered</span>
                        <span className="time">5 minutes ago</span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="notif-icon notif-success">
                        {" "}
                        <i className="la la-comment"></i>{" "}
                      </div>
                      <div className="notif-content">
                        <span className="block">Rahmad commented on Admin</span>
                        <span className="time">12 minutes ago</span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="notif-img">
                        <img
                          src="../assets/img/profile2.jpg"
                          alt="Img Profile"
                        />
                      </div>
                      <div className="notif-content">
                        <span className="block">Reza send messages to you</span>
                        <span className="time">12 minutes ago</span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="notif-icon notif-danger">
                        {" "}
                        <i className="la la-heart"></i>{" "}
                      </div>
                      <div className="notif-content">
                        <span className="block">Farrah liked Admin</span>
                        <span className="time">17 minutes ago</span>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <a className="see-all" href="javascript:void(0);">
                    {" "}
                    <strong>See all notifications</strong>{" "}
                    <i className="la la-angle-right"></i>{" "}
                  </a>
                </li>
              </ul>
            </li> */}
            <Dropdown className="nav-item" toggle={() => setUserDropOpen(!userDropOpen)}
             isOpen={userDropOpen}>
              <DropdownToggle caret className="profile-pic" tag="li">
                {" "}
                <img
                  src={icon2}                  
                  alt="user-img"
                  width="36"
                  className="img-circle"
                />
                <span>{user.name}</span>{" "}
              </DropdownToggle>
              <DropdownMenu style={{width:"200px !important"}}>
                <DropdownItem style={{width:"200px !important"}}>
                  <div className="user-box">
                    <div className="u-img">
                    <img src={icon2}  />
                    </div>
                    <div className="u-text">
                      <h4>{user.name}</h4>
                      <p className="text-muted">{user.email}</p>
                      <a
                        href="profile.html"
                        className="btn btn-rounded btn-danger btn-sm"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </DropdownItem>
                <DropdownItem divider/>
                <DropdownItem>
                <Link className="dropdown-item"  to={"/messages"}>
                  <i className="ti-email"></i> Inbox
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <a
                    onClick={handleLogout}
                  >
                    <i className="fa fa-power-off"></i> Logout
                  </a>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            {/*<li className="nav-item dropdown">
              <ul className="dropdown-menu dropdown-user">
                <li>
                  <div className="user-box">
                    <div className="u-img">
                      <img src="../assets/img/profile.jpg" alt="user" />
                    </div>
                    <div className="u-text">
                      <h4>{user.name}</h4>
                      <p className="text-muted">{user.email}</p>
                      <a
                        href="profile.html"
                        className="btn btn-rounded btn-danger btn-sm"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </li>
                {/* <a className="dropdown-item" href="#">
                  <i className="ti-user"></i> My Profile
                </a>
                <a className="dropdown-item" href="#">
                  My Balance
                </a> */}
                
                
                {/* <a className="dropdown-item" href="#">
                  <i className="ti-settings"></i> Account Setting
                </a> */}
              {/* </ul>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavbarDashboard;
