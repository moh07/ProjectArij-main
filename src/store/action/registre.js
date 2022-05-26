import instance from "../../axios";
import * as actionTypes from "./actionTypes";


const SignUpStart = () => {
  
  return {
    type: actionTypes.SIGNUP_START,
  };
};

const SignUpSuccess = () => {

  return {
    type: actionTypes.SIGNUP_SUCESS
  };
};
const SignUpField = () => {
  return {
    type: actionTypes.SIGNUP_FAILED ,
  };
};


export const SignUp = (data) => {
    return dispatch => {
      dispatch(SignUpStart());
      instance
        .post("/register", {
          name: data.name,
          lastName: data.lastname,
          email: data.email,
          password: data.password,
          phone: data.phone,
          address: data.address,
          type: data.type,
          taxRegistration: data.taxRegistration
        })
        .then(response => {
          console.log(" daaaaa ",data);
          return dispatch(SignUpSuccess());
        })
        .catch(error => {
          return dispatch(SignUpField());
        });
    };
  };
  