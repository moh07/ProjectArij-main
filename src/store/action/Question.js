import instance from "../../axios";
import * as actionTypes from "./actionTypes";
const AddQuestionSuccess = () => {

  return { 
    type: actionTypes.AddQuestion_SUCESS
  };
};
const AddQuestionField = () => {
  return {
    type: actionTypes.AddQuestion_FAILED,
  };
};


export const AddQuestion = (data) => {
  console.log("data=>", data)
  let handler = {
    name: data.name,
    email: data.email,
    subject: data.subject,
    message: data.message,
    response: data.response,

  }
  console.log(handler)
  return dispatch => {
    // dispatch(AddProductStart());
    instance
      .post("/question", handler)
      .then(response => {
        console.log(" daaaaaxx ", response.data);
        return dispatch(AddQuestionSuccess());
      })
      .catch(error => {
        return dispatch(AddQuestionField());
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