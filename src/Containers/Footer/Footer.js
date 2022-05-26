import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as actions from "../../store/action/Subscription";
import "./Footer.css";
import facebook from "../../Assets/Images/facebook.svg";
import instagram from "../../Assets/Images/instagram.svg";
import youtube from "../../Assets/Images/youtube.svg";
import twitter from "../../Assets/Images/twitter.svg";
import language from "../../landingPage.json";
import { Loader } from "../../Components";
import ChatBoot from "../../Components/ChatBoot/ChatBoot";

const Footer = ({ marginTop }) => {
  const lang = useSelector(state => state.rootReducer.language);
  const listCategories = useSelector(state => state.category.categorys);
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");

  const hundelSubscription = () => {
    try {
      let handler = { email };
      dispatch(actions.AddSubscription(handler));
      //   history.push("/")
    } catch (error) {
      // History.push("/")
    }
  };

  return (
    <footer id='footer' style={{ marginTop: marginTop }}>
      <div className='row'>
        <div className='col-md-2 footer-col'>
          <img src={facebook} className='footer-img' />
          <img src={instagram} className='footer-img' />
          <img src={twitter} className='footer-img' />
          <img src={youtube} className='footer-img' />
        </div>
        <div className='col-md-5 col-lg-4 footer-textcontainer footer-col'>
          <h1 className='footer-textcontainer-title'>Mafi</h1>
          <p className='footer-textcontainer-text'>
            {lang === "english"
              ? language.Description.english
              : language.Description.arabic}
          </p>

          <div className='row'>
            <div className='col-5'>
              <input
                type='text'
                className='form-control footer-textcontainer-input'
                placeholder={
                  lang === "english"
                    ? language.subscription.english
                    : language.subscription.arabic
                }
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className='col-2'>
              <button
                className='btn footer-textcontainer-button'
                onClick={() => hundelSubscription()}>
                {lang === "english"
                  ? language.subscribe.english
                  : language.subscribe.arabic}
              </button>
            </div>
          </div>
        </div>
        <div className='col-md-2 col-lg-2 footer-linkContainer'>
          <ul className='footer-linkContainer-list'>
            <li>
              <Link to={"/"} className='footer-linkContainer-list-item'>
                {lang === "english"
                  ? language.home.english
                  : language.home.arabic}
              </Link>
            </li>
            <li>
              <Link
                to={"/allproducts"}
                className='footer-linkContainer-list-item'>
                {lang === "english"
                  ? language.product.english
                  : language.product.arabic}
              </Link>
            </li>
            <li>
              <a className='footer-linkContainer-list-item' href='#Services'>
                {/* دعم فني */}
                {lang === "english"
                  ? language.TechincalSupport.english
                  : language.TechincalSupport.arabic}
              </a>
            </li>
            <li>
              <Link to={"/"} className='footer-linkContainer-list-item'>
                {lang === "english"
                  ? language.ContactUs.english
                  : language.ContactUs.arabic}
              </Link>
            </li>
          </ul>
        </div>
        <div className='col-md-2 col-lg-2 footer-linkContainer'>
          <ul className='footer-linkContainer-list'>
            {listCategories ? (
              listCategories.map(v => (
                <>
                  <li>
                    <Link
                      className='footer-linkContainer-list-item'
                      to={`/category/${v.id}`}>
                      {lang === "english" ? v.title : v.titleAr}
                    </Link>
                  </li>
                </>
              ))
            ) : (
              <Loader />
            )}
          </ul>
        </div>
      </div>
      <div>
        <p className='footer-copyright'>Uptech 2021, all rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;