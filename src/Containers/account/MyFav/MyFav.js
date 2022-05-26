import React, { Component, useEffect, useState } from "react";
import "./MyFav.css";
import { Loader, ProductComponent } from "../../../Components/index";
import FavDone from "../../../Assets/Images/fav-done.svg";
import { useDispatch, useSelector } from "react-redux";

const MyFav = () => {
  const fav = useSelector((state) => state.rootReducer.fav);
  const [favoris, setFavoris] = useState(fav);
    
  useEffect(() => {
    setFavoris(fav)
  }, [fav]);

  return (
    <div className="dashboard-right card card-body account-right">
      <div className="row">
        <div className="col-md-12" style={{ marginBottom: "2rem" }}>
          <div className="main-title-tab">
            <h4>
              <i className="uil uil-heart" />
              My Favorites
            </h4>
          </div>
        </div>
        <div className="col-lg-12 col-md-12">
          <div className="pdpt-bg">
            <div className="wishlist-body-dtt">
            {favoris.map((v, i) => <ProductComponent
                product={v}
                isfav={true}
              ></ProductComponent>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFav;
