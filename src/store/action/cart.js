import * as actionTypes from "./actionTypes";
import  instance  from "../../axios";
export const addItemToCart = (item) => {
  return (dispatch) =>
    dispatch({
      type: actionTypes.ADD_ITEM_TO_CART,
      item,
    });
};

export const deleteItemFromCart = (itemId) => {
  return (dispatch) =>
    dispatch({
      type: actionTypes.DELETE_ITEM_FROM_CART,
      itemId,
    });
};

export const incrementQte = (itemId) => {
  return (dispatch) =>
    dispatch({
      type: actionTypes.INCREMENT_QTE_PROUDUCT,
      itemId,
    });
};

export const decrementQte = (itemId) => {
  return (dispatch) =>
    dispatch({
      type: actionTypes.DECREMENT_QTE_PROUDUCT,
      itemId,
    });
};

export const resetCart = (data) => {
  return (dispatch) =>
    dispatch({
      type: actionTypes.RESET_CART,
      data,
    });
};
export const refreshCart = (data) => {
  return (dispatch) =>
    dispatch({
      type: actionTypes.REFRESH_CART,
      data,
    });
};
export const validation = (data) => {
  return (dispatch) => {
    instance.post('/Quotation',data).then((res)=>{
      console.log("votre commande est confirmer avec succes")
    }).catch((err)=>{console.log("error occured lors du confirmation de votre confirmation")});
  }
}


export const resetCardAfterValidation = () => {
  return (dispatch) =>
    dispatch({
      type: actionTypes.REST_CARD_AFTER_VALIDATION,
    });
};