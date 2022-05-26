import React, {useEffect} from "react";
// import "../Containers/account/css/index.css";
import {
    Profile,
    Detail,
    List,
    MyFav,
    Overview,
    ContactUs
} from "../Containers/index";
import Devis from '../Containers/account/Devis/Devis.js';
import ListeDesDevis from '../Containers/account/Devis/ListeDesDevis.js';
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import AppsIcon from "@material-ui/icons/Apps";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/Home";
import "../Containers/account/css/accoun.css";
import {useDispatch, useSelector} from "react-redux";
import avatar from "./../Assets/Images/avatar.png"
import {
    Link,
    useRouteMatch,
    Switch,
    Route,
    useParams,
    useLocation
} from "react-router-dom";
import {Loading} from "react-fullscreen-loading";
import * as actions from "../store/action/index";
import {useHistory} from 'react-router-dom';
import Products from "./Products";
import ChatBoot from "../Components/ChatBoot/ChatBoot";



const Dashboard = () => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    console.log("Propsuser",user)
    let {path, url} = useRouteMatch();
    let {dshboardPath} = useParams();
    let location = useLocation();
    let souPath = location.pathname.split("/").reverse()[0];
    const dispatch = useDispatch();
    const username = useSelector((state) => state.rootReducer.username);
    const history = useHistory();

    const handleLogout = () => {
        dispatch(actions.userLogout());
        history.push("/");
    };

    useEffect(() => console.log("user Dashboard => ", localStorage.getItem('user')), [user])
    return (<div> {
        user ? <div className="wrapper">
            <div className="gambo-Breadcrumb">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <span>
                                        <HomeIcon style={
                                            {
                                                fontSize: "18px",
                                                marginBottom: "0.5rem"
                                            }
                                        }/>
                                        Home /
                                    </span>
                                    <li className={"breadcrumb-item   active"}
                                        aria-current="page">
                                        My Profile
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container01 row">
                <div className="col-lg-3 col-md-4">
                    <div className="left-side-tabs">
                        <div className="dashboard-left-links">
                            <div >
                                <div className="user-dt">
                                    
                                    
                                    <img  
                  src={avatar}                  
                  alt="user-img"
                  className="img-circle"
                  style={{marginTop:"20px",width:"80px"}}
                />
                                        
                                  
                                    <h4>{
                                        user.firstname
                                    }
                                    </h4>
                                    <h4>
                                        {
                                        user.lastname
                                    } </h4>
                                   
                                </div>
                            </div>
                        

                            {/* <Link
                    to={`${url}/overview`}
                    className={
                      "user-item" + (souPath === "overview" ? "  active" : "")
                    }
                  >
                    <AppsIcon style={{ fontSize: "20px", marginRight: "1rem" }} />
                    Overview
                  </Link> */}
                            <Link to={
                                    `${url}`
                                }
                                className={
                                    "user-item" + (
                                    souPath === "dashboard" ? "  active" : ""
                                )
                            }>
                                <PersonOutlineIcon style={
                                    {
                                        fontSize: "20px",
                                        marginRight: "1rem"
                                    }
                                }/>
                                My profile
                            </Link>
                            <Link to={
                                    `${url}/orders`
                                }
                                className={
                                    "user-item" + (
                                    souPath === "orders" ? "  active" : ""
                                )
                            }>
                                <PlaylistAddCheckIcon style={
                                    {
                                        fontSize: "20px",
                                        marginRight: "1rem"
                                    }
                                }/>
                                My Orders
                            </Link>

                            <Link to={
                                    `${url}/favorites`
                                }
                                className={
                                    "user-item" + (
                                    souPath === "favorites" ? "  active" : ""
                                )
                            }>
                                <FavoriteBorderIcon style={
                                    {
                                        fontSize: "20px",
                                        marginRight: "1rem"
                                    }
                                }/>
                                My Favorites
                            </Link>

                            <Link to={
                                    `${url}/devis`
                                }
                                className={
                                    "user-item" + (
                                    souPath === "devis" ? "  active" : ""
                                )
                            }>
                                <FavoriteBorderIcon style={
                                    {
                                        fontSize: "20px",
                                        marginRight: "1rem"
                                    }
                                }/>
                                Demander Devis
                            </Link>

                            <Link to={
                                    `${url}/listeDesDevis`
                                }
                                className={
                                    "user-item" + (
                                    souPath === "listeDesDevis" ? "  active" : ""
                                )
                            }>
                                <PlaylistAddCheckIcon style={
                                    {
                                        fontSize: "20px",
                                        marginRight: "1rem"
                                    }
                                }/>
                                Liste des devis demandés
                            </Link>


                            <a className="user-item"
                                onClick={handleLogout}>
                                <ExitToAppIcon style={
                                    {
                                        fontSize: "20px",
                                        marginRight: "1rem"
                                    }
                                }/>
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
                {/* ------------------------------------------------------------- */}
                <div className="dashboard-containern col-lg-9 col-md-8">
                    <div className="col-lg-11 col-md-12 ">
                        <Switch>
                            <Route exact
                                path={path}>
                                <Profile user={user}/>
                            </Route>
                            <Route exact
                                path={
                                    path + "/overview"
                            }>
                                <Overview/>
                            </Route>
                            <Route exact
                                path={
                                    path + "/orders"
                            }>
                                <Detail/>
                            </Route>
                            <Route exact
                                path={
                                    path + "/favorites"
                            }>
                                <MyFav/>
                            </Route>
                            <Route exact
                                path={
                                    path + "/devis"
                            }>
                                <Devis/>
                            </Route>
                            <Route exact
                                path={
                                    path + "/listeDesDevis"
                            }>
                                <ListeDesDevis/>
                            </Route>
                            <Route path={
                                path + "/allproducts"
                            }>
                                <Products/>
                            </Route>

                            <Route path={
                                path + "/contactus"
                            }>
                                <ContactUs/>
                            </Route>

                        </Switch>
                        <ChatBoot/>
                    </div>
                </div>
            </div>
        </div> : `Loading...`
    }
        
    </div>
    );;
    };
    
    export default Dashboard;
