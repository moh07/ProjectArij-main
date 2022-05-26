import CardImg from "../../Assets/Images/CardImg.svg";
import icon1 from "../../Assets/Images/icon1.svg";
import icon2 from "../../Assets/Images/icon2.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/action/index";

import "./Card.css";

const Card = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="card productCard">
        <img 
        // src={product.imagePrincipale} 
        src={"http://localhost:4000/products/image"+product.imagePrincipale}
        className="card-img-top" />
        <div className="fav-cart-icons">
          <img src={icon2} className="icon2" />
          <img
            src={icon1}
            className="icon1"
            onClick={() => {
              console.log("click =>" , product);
              dispatch(
                actions.addItemToCart({
                  ...product,
                  qte: 1,
                  
                })
              );
            }}
          />
        </div>
        <div className="card-body name_and_prix">
          <h5 className=" productCard-title ">{product.title}</h5>
          <p className="card-text productCard-description">{product.description}</p>
          <h3 className=" productCard-title">
            {product.price} <span className="productCard-title-unit">dt</span>
          </h3>
          <Link to={`/products/${product.id}`}>
            <div className="btn productCard-button bi bi-basket">BUY</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
