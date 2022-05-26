import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CategoriesContainer.css";
import loop from "../../Assets/Images/loop.svg";
import axios from "axios";

const CategoriesContainer = () => {
  const [Categorie, setCategorie] = useState([]);


  return (
    <div className="category">
      {/* <div className="name_cat">
        <h3>electronics</h3>
      </div>

      <div className="card-cat ">
        <div className="resarch-bar ">
          <form>
            <div className="input-group   mb-3 ">
              {" "}
              <input
                type="text"
                className="form-control resarch-input "
                placeholder="Search Here ..."
              />
              <div className="input-group-append">
                <button type="submit" className="btn resarch-btn">
                  <img src={loop} className="search-icon" />{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="sidenav">
          {Categorie.map((e) => {
            return (
              <div>
                <Link
                  to={`/products/category/${e}`}
                  className=" list-group-item-action"
                >
                  {e} <img src={loop} className="search-icon" />{" "}
                </Link>
              </div>
            );
          })}
        </div>
      </div> */}
    </div>
  );
};

export default CategoriesContainer;
