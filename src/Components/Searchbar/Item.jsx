import React from "react";

const Item = ({ title, image, category }) => {
  return (
    <div style={{ borderBottom: " 1px solid grey" }} className="search-item">
      <div className="row main align-items-center">
        <div className="col-1">
          <img className="imgresult" 
          // src={image}
          src={process.env.PUBLIC_URL+"/image/"+image}
           />
        </div>
        <div className="col-11">
          <p>{title}</p>
        </div>
      </div>{" "}
    </div>
  );
};

export default Item;
