import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/action/index";
import "./item.css";
import shoppingBasket from "../../Assets/Images/shoppingBasket.png";

const Item = ({ imagePrincipale, name, price, id, qte, category }) => {
  const dispatch = useDispatch();

  const handleIncrementQte = () => {
    dispatch(actions.incrementQte(id)); 
  };
  const handleDecrementQte = () => {
    dispatch(actions.decrementQte(id));
  };
  const handleDelete = () => {
    console.log("test item");
    dispatch(actions.deleteItemFromCart(id));  
  };
  return (
    <div>
      <div className="row border-top border-bottom iteminfo">
        <div className="row main align-items-center">
          <div className="col-2">
            <img className="img-fluid itemimg" 
        src={"http://localhost:4000/products/image"+imagePrincipale}
        />
          </div>
          <div className="col itemname">
            <div className="row text-muted">{category}</div>
            <div className="row">{name}</div>
          </div>
          <div className="col numberitem ">
            <div className="NumbItem">
              <div
                href="#"
                className="mincebtn btn"
                onClick={handleDecrementQte}
                style={
                  qte === 1
                    ? { pointerEvents: "none", backgroundColor: "dimgray" }
                    : null
                }
              >
                - 
              </div>

              <input
                type="number"
                className="inputqt"
                placeholder={qte}
                id="quantityInput"
                min="1"
              />

              <div
                href="#"
                className="maxcebtn btn"
                onClick={handleIncrementQte}
              >
                +
              </div>
            </div>
          </div>
          <div className="col">
            {Number(price) * Number(qte)} <span className="dt">DTT</span>
            <span className="close" onClick={handleDelete}> 
              &#10005;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
