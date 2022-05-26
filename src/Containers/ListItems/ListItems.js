import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Item } from "../../Components/index";

const ListItems = () => {
  const cart = useSelector((state) => state.rootReducer.cart);
  const dispatch = useDispatch();
  console.log("cart items",cart)
  return cart.map((v, i) => <Item key={i} {...v} />);
};

export default ListItems;
