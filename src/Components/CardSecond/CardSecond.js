import cardImg from "../../Assets/Images/CardSecondImage.svg";
import "./CardSecond.css";
import icon1 from "../../Assets/Images/icon1.svg";
import icon2 from "../../Assets/Images/icon2.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/action/index";

const CardSecond = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="icons-2ed-card">
      <img src={icon2} className="icon2" />
      <img src={icon1} className="icon1" 
      
      onClick={() => {
        console.log("click =>" , product);
        dispatch(
          actions.addItemToCart(product)
        );
      }}
      />
      </div>
     <Link to={`/products/${product.id}`}>
      <div className="cardSecond">
        <img
        //  src={product.image} 
         src={process.env.PUBLIC_URL+"/image/"+product.image}
        className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title cardSecond-title">{product.title}</h5>
          <h3 className="price2edcard">
            {product.price}
            <span className="productCard-title-unit">dt</span>
          </h3>
          
          {/* <div className="icons-2ed-card">
          <a href="#">
            <img src={icon2} className="icon" />
          </a>
          <a href="#">
            <img src={icon1} className="icon" />
          </a>
          
        </div> */}
      
        </div>
        
        
      </div>
      </Link>
     
    </div>
  );
};

export default CardSecond;
