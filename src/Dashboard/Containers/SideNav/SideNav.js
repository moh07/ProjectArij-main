import React from "react";
import { Link } from "react-router-dom";
import ListIcon from '@material-ui/icons/List';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import GroupIcon from '@material-ui/icons/Group';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../store/action/index";
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import icon2 from "../../assets/Images/admin-user.png";



const SideNav = () => {
  const username = useSelector((state) => state.rootReducer.username);
  return (
      <div className="sidebar">
        <div className="scrollbar-inner sidebar-wrapper">
          <div className="user">
            <div className="photo">
              <img src={icon2} />
            </div>
            <div className="info">
              <a
                className=""
                data-toggle="collapse"
                href="#collapseExample"
                aria-expanded="true"
              >
                <span>
                {username}
                  <span className="user-level">Administrator</span>
                  {/* <span className="caret"></span> */}
                </span>
              </a>
              <div className="clearfix"></div>

              {/* <div
                className="collapse in"
                id="collapseExample"
                aria-expanded="true"
              >
                <ul className="nav">
                  <li>
                    <a href="#profile">
                      <span cl  assName="link-collapse">My Profile</span>
                    </a>
                  </li>
                  <li>
                    <a href="#edit">
                      <span className="link-collapse">Edit Profile</span>
                    </a>
                  </li>
                  <li>
                    <a href="#settings">
                      <span className="link-collapse">Settings</span>
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
          <ul className="nav">
            <li className="nav-item active">
              <Link to={"/dashboard"}>
                <i className="la la-dashboard"></i>
                <p>Dashboard</p>
                {/* <span className="caret"></span> */}
              </Link>
            </li>
            <div style={{ borderBottom: "1px solid #eee" }}></div>
            <li className="nav-item">
              <Link to={"/customer-list"}>
                {/* <i className="la la-table"></i> */}
                <GroupIcon style={{ color: "#cfd1d5", marginRight: "1rem" }} />
                <p>Customer List</p>

              </Link>
            </li>
            <div style={{ borderBottom: "1px solid #eee" }}></div>
            <li className="nav-item">
              <Link to={"/Product-list"}>
                {/* <i className="la la-table"></i> */}
                <ListIcon style={{ color: "#cfd1d5", marginRight: "1rem" }} />
                <p>Product List</p>

              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/devisadmin"}>
                {/* <i className="la la-table"></i> */}
                <ListIcon style={{ color: "#cfd1d5", marginRight: "1rem" }} />
                Order List
                
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/new-product"}>
                {/* <i className="la la-table"></i> */}
                <PlaylistAddIcon style={{ color: "#cfd1d5", marginRight: "1rem" }} />
                <p>New Product</p>

              </Link>
              
            </li>
           
            {/*<div style={{ borderBottom: "1px solid #eee" }}></div>
            <li className="nav-item">
              <Link to={"/new-category"}>
                {/* <i className="la la-table"></i
                <GroupIcon style={{ color: "#cfd1d5", marginRight: "1rem" }} />
                <p>New Category</p>

              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/category-list"}>
                {/* <i className="la la-table"></i> 
                <GroupIcon style={{ color: "#cfd1d5", marginRight: "1rem" }} />
                <p>Category List</p>

              </Link>
            </li>*/}


            <div style={{ borderBottom: "1px solid #eee" }}></div>
           { /*<li className="nav-item">
              <Link to={"/order-list"}>
                <ListIcon style={{ color: "#cfd1d5", marginRight: "1rem" }} />
                <p>Order List</p>

              </Link>
          </li>*/}
            {/* <li className="nav-item">
              <Link to={"/view-order"}>
                <ShoppingCartIcon style={{ color: "#cfd1d5", marginRight: "1rem" }} />
                <p>View Order</p>

              </Link>
            </li> */}
            <div style={{ borderBottom: "1px solid #eee" }}></div>
            <li className="nav-item">
              <Link to={"/technical-support"}>
                <ContactSupportIcon style={{ color: "#cfd1d5", marginRight: "1rem" }} />
                <p>Technical Support</p>
              </Link>
            </li>
            <div style={{ borderBottom: "1px solid #eee" }}></div>
            <li className="nav-item">
              <Link to={"/chatbot"}>
                <QuestionAnswerIcon style={{ color: "#cfd1d5", marginRight: "1rem" }} />
                <p>ChatBot</p>
              </Link>
            </li>
            <div style={{ borderBottom: "1px solid #eee" }}></div>
            













          </ul>
        </div>
      </div>
  );
};

export default SideNav;
