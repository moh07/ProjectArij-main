import instance from "../../axios";
import * as actionTypes from "./actionTypes";

const authStart = () => {
  console.log("auth started");
  return {
    type: actionTypes.AUTH_START,
  };
};

const authSuccess = token => {
  localStorage.setItem("token", token);
  console.log("auth success");
  return {
    type: actionTypes.AUTH_SUCCESS,
    token,
  };
};
const authField = (message) => {
  console.log("auth field");
  return {
    type: actionTypes.AUTH_FAILED,
    message
  };
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  console.log("  [logout]  ");
  return {
    type: actionTypes.LOGOUT,
  };
};

export const userLogout = () => {
  console.log("  [userLogout]  ");
  return dispatch => {
    console.log("dkhalna 3ala baraket elleh ");
    dispatch(logout());
  };
};

export const auth = ({ username, password }) => {
  return dispatch => {
    dispatch(authStart());
    instance
      .post("/login", {
        username,
        password,
      })
      .then(response => {

        return dispatch(authSuccess(response.data.token));

      })
      .catch(error => {
        console.log("status", error.response)
        return dispatch(authField(error.response.data.message));
      });
  };
};

export const checkTokenFromLocalStroage = () => dispatch => {
  if (!localStorage.getItem("token")) dispatch(logout());
  else dispatch(authSuccess(localStorage.getItem("token")));
};

export const rediractor = url => {
  return dispatch =>
    dispatch({
      type: actionTypes.REDIRACT,
      url,
    });
};
