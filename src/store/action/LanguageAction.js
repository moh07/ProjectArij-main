import * as actionTypes from "./actionTypes";

export const changeLang = language => {
  return {
    type: actionTypes.CHANGE_LANGUAGE,
    lang: language,
  };
};