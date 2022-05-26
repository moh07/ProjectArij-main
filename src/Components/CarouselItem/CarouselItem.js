import { useEffect } from "react";
import carouselPic from "../../Assets/Images/carouselPic.svg";
import star from "../../Assets/Images/star.svg";

import "./CarouselItem.css";

const CarouselItem = ({ title, image, category, price }) => {
  useEffect(() => {
    console.log("image => ", title);
  }, []);
  return (
    <div className="CarouselItem btn">
      <div className="row">
        <div className="col-3 CarouselItem-left-part">
          <span className="CarouselItem-left-part-date">19 March 2021</span> 
          <p className="CarouselItem-left-part-type">{category}</p>
          <p className="CarouselItem-left-part-desc ll">{title}</p>
        </div>
        <div className="col-6">
          <img 
          // src={image} 
          src={process.env.PUBLIC_URL+"/image/"+image}
          className="carouselPic" />
        </div>
        <div className="col-2 CarouselItem-right-part">
          <p className="CarouselItem-right-part-text">{price} TND</p>
          {/* <button className="btn CarouselItem-right-part-favBtn">6.0</button> */}
          <button className="btn CarouselItem-right-part-favBtn">
            <img src={star} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
