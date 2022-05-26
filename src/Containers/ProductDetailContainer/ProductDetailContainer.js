import truck from "../../Assets/Images/Truck.svg";
import { useState} from "react";
import {useParams} from 'react-router-dom';
import star from "../../Assets/Images/star.svg";
import "./ProductDetailContainer.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/action/index";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import products from "../ProductsContainer/products";
import ImgCrop from "antd-img-crop";
const changTo1stPanel = () => {
  document.getElementById("panel1").classList.add("active-panel");
  document.getElementById("panel2").classList.remove("active-panel");
  document.getElementById("panel3").classList.remove("active-panel");
};

const changTo2ndPanel = () => {
  document.getElementById("panel2").classList.add("active-panel");
  document.getElementById("panel1").classList.remove("active-panel");
  document.getElementById("panel3").classList.remove("active-panel");
};
const changTo3rdPanel = () => {
  document.getElementById("panel3").classList.add("active-panel");
  document.getElementById("panel1").classList.remove("active-panel");
  document.getElementById("panel2").classList.remove("active-panel");

};
const changTo4rdPanel = () => {
  document.getElementById("panel4").classList.add("active-panel");
  document.getElementById("panel1").classList.remove("active-panel");
  document.getElementById("panel2").classList.remove("active-panel");
  document.getElementById("panel3").classList.remove("active-panel");


};

let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();




const ProductDetailContainer = ({img,name,img1,img2,description}) => {
  const dispatch = useDispatch();
  const [stateQte, setStateQte] = useState(0);
 // const { id } = useParams();
 

  return (
    
    <section id="ProductDetailContainer">
     
      <div className="row justify-content-center">
        <div className="col-12 col-md-7">
          <div className="row">
            <div className="col-3 ProductDetailContainer-tabs">
              {img && img!==null?
              <img
               src={"http://localhost:4000/products/image"+img}
               className="ProductDetailContainer-tabs-img"
                onClick={changTo1stPanel}
              />:""}
              {img1 && img1!==null?
              <img
               src={"http://localhost:4000/products/image"+img1}
                className="ProductDetailContainer-tabs-img"
                onClick={changTo2ndPanel}
              />:""}
              {img && img2!==null?
               <img
                src={"http://localhost:4000/products/image"+img2}
                 className="ProductDetailContainer-tabs-img"
                 onClick={changTo3rdPanel}
               />:""
              }
                

               
              
            </div> 
              
            <div className="col-8">
              <div
                id="panel1"
                className="ProductDetailContainer-panel active-panel"
              >
                <img
               src={"http://localhost:4000/products/image"+img}
               //   src={process.env.PUBLIC_URL+"/image/"+props.image}
                  className="ProductDetailContainer-panel-img"
                />
              </div>
              <div id="panel2" className="ProductDetailContainer-panel">
                <img
               src={"http://localhost:4000/products/image"+img1}
               //  src={process.env.PUBLIC_URL+"/image/"+props.DetailImage}
                  className="ProductDetailContainer-panel-img"
                />
              </div>
              <div id="panel3" className="ProductDetailContainer-panel">
                <img
               src={"http://localhost:4000/products/image"+img2}
               //  src={process.env.PUBLIC_URL+"/image/"+props.DetailImage}
                  className="ProductDetailContainer-panel-img"
                />
              </div>
             
            </div>
            <div
              id="ProductDetailContainer-carousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#ProductDetailContainer-carousel"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#ProductDetailContainer-carousel"
                  data-slide-to="1"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
               src={"http://localhost:4000/products/image"+img}
                    className="ProductDetailContainer-panel-img"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={truck}
                    className="ProductDetailContainer-panel-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-10 col-sm-6 col-md-4">
          <div className="ProductDetailContainer-info mx-auto">
            <p className="ProductDetailContainer-info-date">{date} {month<10?`0${month}`:`${month}`} {year} </p>
            {/* <button className="btn ProductDetailContainer-info-favBtn">
              <p className="ProductDetailContainer-info-favBtn-rating">6.0</p>
            </button> */}
            <button className="btn ProductDetailContainer-info-favBtn">
              <img src={star} />
            </button>
            <p className="ProductDetailContainer-available">
              availability:{" "}
              <span className="ProductDetailContainer-available-span">
                in stock
              </span>
            </p>
            <p className="ProductDetailContainer-pieces">504 000 pcs</p>
            <p className="ProductDetailContainer-productName">{name} </p>
            <p className ="ProductDetailContainer-productDesc">{description}</p>
            <form className="ProductDetailContainer-info-form">
              <label for="quantity" className="ProductDetailContainer-label">
                Quantity
              </label>
              <button
                className="btn ProductDetailContainer-info-form-inputBtn"
                type="button"
                onClick={() => {
                  if (stateQte > 1)
                    setStateQte(stateQte - 1)
                }}
              >
                -
              </button>
              <input
                type="number"
                className="ProductDetailContainer-inputNumber"
                id="quantityInput"
                min="1"
                max="99"
                value={stateQte}
                disabled
              />
              <button
                className="btn ProductDetailContainer-info-form-inputBtn"
                type="button"
                onClick={() => setStateQte(stateQte + 1)}
              >
                +
              </button>
              <div className="row ProductDetailContainer-info-form-bottomPart">
                <div className="col-12 col-lg-6 align-self-end">
                  <p className="ProductDetailContainer-info-form-bottomPart-price">
                   
                    <span className="ProductDetailContainer-info-form-bottomPart-price-span">
                      tnd
                    </span>
                  </p>
                </div>
                <div className="col-12 col-lg-6">
                  <div
                    className="btn ProductDetailContainer-info-form-bottomPart-submit"
                    onClick={() => {
                    /*  dispatch(
                        actions.addItemToCart({
                          img: props.image,
                          name: props.title,
                          prix: props.price,
                          qte: stateQte,

                        })
                      );*/
                    }}
                  >
                    <LocalGroceryStoreIcon style={{ fontSize: 21, marginRight: '0.5rem' }} />
                    Add to cart
                  </div>
                  <Link to={"/checkout"}>
                    <div
                      className="btn ProductDetailContainer-info-form-bottomPart-submit"
                      style={{ backgroundColor: "#a4c755" }}
                    >
                      Buy
                    </div>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
   
      
    </section>
  
  );
  
};

export default ProductDetailContainer;
