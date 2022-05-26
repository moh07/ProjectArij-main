import React, { useEffect } from "react";
import { Loader, MobileNav, Modals } from "../../Components/index";
import ChatBoot from "../../Components/ChatBoot/ChatBoot";
import logo from "../../Assets/Images/logo.png";
import bars from "../../Assets/Images/bars.svg";
import { useDispatch, useSelector } from "react-redux";
import { CartIcon } from "../../Components/index";
import { UserNav } from "../../Components/index";
import "./Navbar.css";
import shoppingBasket from "../../Assets/Images/shoppingBasket.png";
import { Link, useHistory } from "react-router-dom";
import * as actions from "../../store/action/index";
import language from "../../landingPage.json";
import { changeLang } from "../../store/action/LanguageAction";
import tech2 from "../../Assets/Images/tech2.png";
import { useState } from "react";
import { ProductsContainer} from "../ProductsContainer/LaitiereContainer";
import products from "../ProductsContainer/products";
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'

const result=[];


const NavbarUser = () => {
  

  const [categoriesOpen, setCategoriesOpen] = useState(false)

  const [lang, setLang] = React.useState("english");

  //const listCategories = useSelector(state => state.category.categorys);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const token = localStorage.getItem('token');
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("token :=> ", token);
  }, [token]);


  const changeLanguageToArabic = () => {
    setLang("arabic");
    dispatch(changeLang("arabic"));
    document
      .getElementById("arabic-btn")
      .classList.add("nav-item-button-group-active");
    document
      .getElementById("english-btn")
      .classList.remove("nav-item-button-group-active");
  };
  const changeLanguageToEnglish = () => {
    setLang("english");
    dispatch(changeLang("english"));
    document
      .getElementById("arabic-btn")
      .classList.remove("nav-item-button-group-active");
    document
      .getElementById("english-btn")
      .classList.add("nav-item-button-group-active");
  };
  
  const [data, setdata]=useState(products);
  const filterresult=(catitem)=>{
    //const result=products.filter((curdata)=>{
      //return curdata.categorie!=catitem;
     const result = data.filter((prod)=> prod.categorie===catitem
     );
    console.log(result);
    // settab(result);
  }


  let [listCategories]=useState([
    {
      id:1,
     title:'Laitiere',
  
     
    },
    {
      id:2,
     title:'Extraction des huiles essentielles et végétales',
     
    },
    {
      id:3,
     title:'Séchage et broyage',
     
    },
    {
      id:4,
     title:'Emballage et Conditionnement',
     
    },
  
  
  ])

  console.log({ categoriesOpen })

  return (
    <div id='Nav'>
      <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
        <Link to={"/"}>
          <img src={tech2} alt='' className='navbar-brand-img' />
        </Link>
        <div className='collapse navbar-collapse' id='navbarNav'>
          {/* <div className="dropdown navbar-dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img src={bars} className="navbar-dropdown-img" />
              category
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {listCategories ? (
                listCategories.map((v) => (
                  <>
                    <Link
                      className="dropdown-item searchbar-dropdown-list-item"
                      to={`/category/${v.id}`}
                    >
                      {v.title}
                    </Link>
                    <div className="dropdown-divider" />
                  </>
                ))
              ) : (
                <Loader />
              )}
            </div>
          </div> */}
          <ul className='navbar-nav ' style={{ marginLeft: "10%" }}>
            <li className='nav-item'>
              <Link className='nav-link' to={"/"}>
                {/* الرئيسية */}
                {lang === "english"
                  ? language.home.english
                  : language.home.arabic}
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to={"/dashboard/allproducts"}>
                {/* المنتجات */}
                {lang === "english"
                  ? language.product.english
                  : language.product.arabic}
              </Link>
            </li>

            <li className='lmp'>
            <Dropdown isOpen={categoriesOpen} toggle={() => setCategoriesOpen(!categoriesOpen)} style={{width:"200px !important"}} >
              <DropdownToggle className="dropdowncat" caret tag={"div"}>
                
                  {/* التصنيفات */}
                {lang === "english"
                      ? language.categories.english
                      : language.categories.arabic}
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-cast" style={{ display : categoriesOpen ? "table" : "none" }}
              >
                {listCategories ? (
                    listCategories.map(v => (
                      <>
                        <DropdownItem header>
                          <Link className='dropdown-item searchbar-dropdown-list-item'
                            to={`/${v.title}`}>
                            {lang === "english" ? v.title : v.titleAr}  
                          </Link>
                        </DropdownItem>
                        <div className='dropdown-divider' />
                      </>
                    ))
                  ) : (
                    <Loader />
                  )}
                </DropdownMenu>
              </Dropdown>
              {/*<div className='dropdown '>
                <div
                  className='dropdowncat  dropdown-toggle'
                  type='button'
                  id='dropdownMenuButton'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'>
                  {/* التصنيفات */}
                  {/*{lang === "english"
                      ? language.categories.english
                      : language.categories.arabic}
                </div>
                <div
                  className='dropdown-menu dropdown-menu-cast '
                  aria-labelledby='dropdownMenuButton'>
                    
                  
                </div>
              </div>*/}
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#Services'>
                {/* دعم فني */}
                {lang === "english"
                  ? language.TechincalSupport.english
                  : language.TechincalSupport.arabic}
              </a>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to={"/dashboard/contactus"}>
                {/* اتصل بنا */}
                {lang === "english"
                  ? language.ContactUs.english
                  : language.ContactUs.arabic}
              </Link>
            </li>
          </ul>
          <ul className='navbar-nav ml-auto'>

            {/* ---------------------------------- */}

            {/* <li className="nameuser-nav">
              <UserNav/>
            </li> */}
            <li className='nav-item' style={{ marginTop: "0.3rem" }}>
              <CartIcon />
            </li>
            <li className='nav-item active'>
              <div className='nav-item-button-group'>
                <button
                  type='button'
                  className='btn nav-item-button-group-btn nav-item-button-group-active'
                  onClick={changeLanguageToEnglish}
                  id='english-btn'>
                  EN
                </button>
                <button
                  type='button'
                  className='btn nav-item-button-group-btn '
                  onClick={changeLanguageToArabic}
                  id='arabic-btn'>
                  ع
                </button>
              </div>
            </li>
             <li className="nav-item" style={{ marginTop: "1rem" }}>
              <h3>{user.firstname} / {user.lastname}</h3>
            </li>
          </ul>
        </div>
        <MobileNav></MobileNav>
      </nav>

    </div>
  );
};

export default NavbarUser;