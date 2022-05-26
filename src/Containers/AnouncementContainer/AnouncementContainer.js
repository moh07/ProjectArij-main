import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import newProducts from "../../services/newProducts";
import { CarouselItem, Loader } from "../../Components";
import language from "../../landingPage.json";
import leaf from "../../Assets/Images/leaf.svg";
import "./AnouncementContainer.css";

const AnouncementContainer = () => {
  const lang = useSelector(state => state.rootReducer.language);
  const [homeNewProducts, setHomeNewProducts] = useState();
  const data = useSelector(state => state.category.categorys);
  const products = useSelector(state => state.rootReducer.products);
  useEffect(() => {
    console.log("all category ", data);
    if (products && data) setHomeNewProducts(newProducts(data, products));
  }, [products, data]);
  return (
    <div>
      <div className='row'>
        <div className='col-2'>
          <img src={leaf} className='leaf' />
        </div>
      </div>
      <section
        id='anouncement'
        className='row justify-content-center align-content-center anouncement-contaniner'>
        <div className='col-10 col-md-5'>
          <h1 className='anouncement-contaniner-title'>
            {lang === "english"
              ? language.LatestAnnouncement1.english
              : language.LatestAnnouncement1.arabic}
            <span className='anouncement-contaniner-span'>
              {lang === "english"
                ? language.LatestAnnouncement2.english
                : language.LatestAnnouncement2.arabic}
            </span>
          </h1>
          <p className='anouncement-contaniner-text'>
            {lang === "english"
              ? language.LatestAnnouncementText1.english
              : language.LatestAnnouncementText1.arabic}{" "}
            <span className='anouncement-contaniner-span'>
              {lang === "english"
                ? language.LatestAnnouncementText2.english
                : language.LatestAnnouncementText2.arabic}
            </span>
          </p>
          <a
            className='anouncement-contaniner-button'
            href='#carouselExampleCaptions'
            role='button'
            data-slide='prev'>
            <span
              className='carousel-control-prev-icon anouncement-contaniner-button-icon'
              aria-hidden='true'></span>
            <span className='sr-only'>Previous</span>
          </a>
          <a
            className='anouncement-contaniner-button'
            href='#carouselExampleCaptions'
            role='button'
            data-slide='next'>
            <span
              className='carousel-control-next-icon anouncement-contaniner-button-icon'
              id='anouncement-contaniner-button-icon-right'
              aria-hidden='true'></span>
            <span className='sr-only'>Next</span>
          </a>
          <Link
            to='/allproducts'
            className='btn anouncement-contaniner-showButton'>
            {lang === "english"
              ? language.showAll.english
              : language.showAll.arabic}
          </Link>
        </div>
        <div className='col-10 col-md-5 anouncement-contaniner-slider'>
          <div
            id='carouselExampleCaptions'
            className='carousel slide anouncement-contaniner-slider-item'
            data-ride='carousel'
            data-interval='3500'>
            <ol className='carousel-indicators anouncement-contaniner-slider-indication'>
              <li
                data-target='#carouselExampleCaptions'
                data-slide-to='0'
                className='active anouncement-contaniner-slider-indication-btn'></li>
              <li data-target='#carouselExampleCaptions' data-slide-to='1'></li>
              <li data-target='#carouselExampleCaptions' data-slide-to='2'></li>
              <li data-target='#carouselExampleCaptions' data-slide-to='3'></li>
              <li data-target='#carouselExampleCaptions' data-slide-to='4'></li>
            </ol>
            <div className='carousel-inner'>
              {homeNewProducts ? (
                homeNewProducts
                  .map((v, i) => {
                    if (i === 0)
                      return (
                        <div className='carousel-item active '>
                          <CarouselItem {...v} />
                        </div>
                      );

                    return (
                      <div className='carousel-item'>
                        <CarouselItem {...v} />
                      </div>
                    );
                  })
                  .slice(0, 5)
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnouncementContainer;