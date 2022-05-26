import React from "react";
import "./ProductComponent.css";
import icon1 from "../../Assets/Images/icon1.svg";
import icon2 from "../../Assets/Images/icon2.svg";
import done from "../../Assets/Images/fav-done.svg";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import * as actions from "../../store/action/index";
import tech2 from "../../Assets/Images/tech2.png";
import {useState} from 'react';


const ProductComponent = ({product,isfav}) => {
    const dispatch = useDispatch();

    return (
        <div className="container-pr">
            <div class="card_product card ">
                <div className="icons">
                    <img src={icon1}
                        className="icon1 "
                        onClick={
                            () => {
                                dispatch(actions.addItemToCart({
                                    ...product,
                                    qte: 1,
                                }));
                            }
                        }/>
                        
                    <img src={!isfav?icon2:done}
                        className="icon1"
                        onClick={
                            () => {
                                if(!isfav)
                                dispatch(actions.addItemToFav({
                                    ...product,
                                    qte: 1,
                                }));
                                else {
                                    dispatch(actions.deleteItemFromFav(product.id))
                                };  

                            }
                        }/>
                </div>
                


            <img src={"http://localhost:4000/products/image"+product.imagePrincipale}
                class="img_product  "
                alt="..."/>
            <Link to={
                `/products/${product.id}`
            }>
                <div class="name_and_prix card-body">
                    <div class="name_product card-title">
                        {product.produit}</div>


                </div>
            </Link>
            
        </div>
    </div>
    );
};

export default ProductComponent;
