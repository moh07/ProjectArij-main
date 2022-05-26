import React, { useState, useEffect } from "react";
import { Board, Loader } from "../../Components/index";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import boardImg from "../../Assets/Images/BoardImage.svg";
import boardImg2nd from "../../Assets/Images/BoardImage2nd.svg";
import "./BoardContainer.css";
import language from "../../landingPage.json";

const BoardContainer = () => {
  const lang = useSelector(state => state.rootReducer.language);
  const listCategories = useSelector(state => state.category.categorys);
  return (
    <section id='board'>
      <div className='row justify-content-center desktop-items'>
        {listCategories ? (
          listCategories
            .map(v => (
              <>
                <div
                  key={v.id}
                  className='col-lg-2 col-xl-2 justify-self-center item-animation'>
                  <Link to={`/category/${v.id}`}>
                    {
                      <Board
                        img={boardImg}
                        category={
                          lang === "english" ? v.title : v.titleAr
                        }></Board>
                    }
                  </Link>
                </div>
              </>
            ))
            .slice(0, 5)
        ) : (
          <Loader />
        )}
      </div>
    </section>
  );
};

export default BoardContainer;