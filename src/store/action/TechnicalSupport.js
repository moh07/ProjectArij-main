import instance from "../../axios";
import * as actionTypes from "./actionTypes";

const AddTechnicalSupportSuccess = () => {

  return {
    type: actionTypes.Add_TechnicalSupport_SUCESS
  };
};
const AddTechnicalSupportField = () => {
  return {
    type: actionTypes.Add_TechnicalSupport_FAILED,
  };
};


export const AddTechnicalSupport = (data) => {
  console.log("data=>", data)
  let handler = {
    subject: data.subject,
    date: data.date,
    address: data.address,
    details: data.details,
    type: data.type,

  }
  console.log(handler)
  return dispatch => {
    // dispatch(AddProductStart());
    instance
      .post("/request", handler)
      .then(response => {
        console.log(" daaaaaxx ", response.data);
        return dispatch(AddTechnicalSupportSuccess());
      })
      .catch(error => {
        return dispatch(AddTechnicalSupportField());
      });
  };
};

// ------------------------------------
const getQuestionsStart = () => {
  console.log("api Questions started");
  return {
    type: actionTypes.GET_Questions_START,
  };
};

const getQuestionsSuccess = questions => {
  console.log("api Question success");
  return {
    type: actionTypes.GET_Questions_SUCCESS,
    questions,
  };
};
const getQuestionsField = () => {
  console.log("api Questions field");
  return {
    type: actionTypes.GET_Questions_FAILED,
  };
};
export const getQuestions = () => {
  return dispatch => {
    dispatch(getQuestionsStart());
    instance
      .get("/question")
      .then(response => {
        console.log("Questions => ", response.data);
        return dispatch(getQuestionsSuccess(response.data));
      })
      .catch(error => {
        console.log("error =>  ", error);
        return dispatch(getQuestionsField());
      });
  };
};

// ------------------------------------