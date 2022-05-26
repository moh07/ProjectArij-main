import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import loop from "../../Assets/Images/loop.svg";
import * as actions from "../../store/action/index";
import Item from "./Item";
import "./Searchbar.css";
import { Empty } from "antd";
import language from "../../landingPage.json";

const Searchbar = () => {
  const listCategories = useSelector(state => state.category.categorys);
  const lang = useSelector(state => state.rootReducer.language);
  const [serchresult, setSerchResult] = useState(true);
  const [activeBlur, setActiveBlur] = useState(true);
  const products = useSelector(state => state.rootReducer.searchResults);
  const dispatch = useDispatch();

  const searchHandler = e => {
    // if input is not empty
    if (e.target.value !== "") {
      console.log("search =>", e.target.value);
      setSerchResult(false);
      //dispatch(actions.searchByItem(e.target.value));
    } else {
      setSerchResult(true);
    }
  };

  const blurHundler = e => {
    if (activeBlur) setSerchResult(true);
  };
  useEffect(() => {
    console.log("active blur", activeBlur);
  }, [activeBlur]);
  useEffect(() => {
    console.log("serch from selector", products);
  }, [products]);
  return (
    <div className='searchbar'>
      <form>
        <input
          type='text'
          placeholder={
            lang === "english"
              ? language.SearchHere.english
              : language.SearchHere.arabic
          }
          className='searchbar-input'
          onChange={searchHandler}
          onBlur={blurHundler}
        />
        <div className='dropdown searchbar-dropdown'>
          <button
            className='btn dropdown-toggle searchbar-dropdown-toggle'
            type='button'
            id='dropdownMenuButton'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'>
            {lang === "english"
              ? language.categories.english
              : language.categories.arabic}
          </button>
          <button
            className='btn dropdown-toggle searchbar-dropdown-toggle-mobile'
            type='button'
            id='dropdownMenuButton'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'></button>
          <div
            className='dropdown-menu searchbar-dropdown-list'
            aria-labelledby='dropdownMenuButton'>
            {listCategories ? (
              listCategories.map(v => (
                <>
                  <Link
                    className='dropdown-item searchbar-dropdown-list-item'
                    to={`category/${v.id}`}>
                    {lang === "english" ? v.title : v.titleAr}
                  </Link>
                  <div className='dropdown-divider' />
                </>
              ))
            ) : (
              <>loading ...</>
            )}
          </div>
        </div>
        <button type='submit' className='searchbar-btn'>
          {lang === "english" ? language.find.english : language.find.arabic}
          <img src={loop} className='searchbar-btn-img' />{" "}
        </button>
        <button type='submit' className='searchbar-btn-mobile'>
          <img src={loop} className='searchbar-btn-mobile-img' />{" "}
        </button>
      </form>
      <div
        className='result '
        hidden={serchresult}
        onMouseDown={() => setActiveBlur(false)}
        onMouseUp={() => setActiveBlur(true)}>
        {products.data != undefined ? (
          products.data.length > 0 ? (
            products.data.map(v => {
              return (
                <Link to={`/dashboard/Products/${v.id}`}>
                  <Item {...v} />
                </Link>
              );
            })
          ) : (
            <Empty
              description='No products were found'
              style={{ paddingTop: 5, paddingBottom: 5 }}
            />
          )
        ) : null
        // <Item title='no product was found' />
        }
      </div>
    </div>
  );
};

export default Searchbar;