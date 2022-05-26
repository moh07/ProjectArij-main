import * as actionTypes from "./actionTypes";
import  instance  from "../../axios";

export const getFav = (item) => {
  return (dispatch) =>
    dispatch({
      type: actionTypes.GET_FAV,
    });
};

export const addItemToFav = (item) => {
  return (dispatch) =>
    dispatch({
      type: actionTypes.ADD_ITEM_TO_FAV,
      item,
    });
};

export const deleteItemFromFav = (itemId) => {
  return (dispatch) =>
    dispatch({
      type: actionTypes.DELETE_ITEM_FROM_FAV,
      itemId,
    });
};
export const refreshFav = (data) => {
  return (dispatch) =>
    dispatch({
      type: actionTypes.REFRESH_FAV,
      data,
    });
};
