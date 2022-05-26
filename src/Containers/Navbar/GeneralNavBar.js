import React, {useEffect} from "react";
import {Loader, MobileNav, Modals} from "../../Components/index";
import ChatBoot from "../../Components/ChatBoot/ChatBoot";
import logo from "../../Assets/Images/logo.png";
import bars from "../../Assets/Images/bars.svg";
import {useDispatch, useSelector} from "react-redux";
import {CartIcon} from "../../Components/index";
import {UserNav} from "../../Components/index";
import "./Navbar.css";
import shoppingBasket from "../../Assets/Images/shoppingBasket.png";
import {Link, useHistory} from "react-router-dom";
import * as actions from "../../store/action/index";
import language from "../../landingPage.json";
import {changeLang} from "../../store/action/LanguageAction";
import tech2 from "../../Assets/Images/tech2.png";
import {useState} from "react";
import {ProductsContainer} from "../ProductsContainer/LaitiereContainer";
import products from "../ProductsContainer/products";
import {Dropdown, DropdownMenu, DropdownToggle, DropdownItem} from 'reactstrap'
import Navbar from "./Navbar";
import NavbarUser from "./NavbarUser";

const result = [];


const GeneralNavBar = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

    useEffect(() => {
        if (localStorage.getItem("user")) 
            {setUser(JSON.parse(localStorage.getItem("user")))
            console.log(user)}
            else {}
    }, []);
    if (user &&  user.role==="user") {
        console.log("Role=>", user.role);
        return (
            <NavbarUser />)
    } else {
        return (
            <Navbar/>);
    }
};

export default GeneralNavBar;
