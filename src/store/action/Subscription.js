import instance from "../../axios";
import * as actionTypes from "./actionTypes";


const AddSubscriptionSuccess = () => {
  return { 
    type: actionTypes.Add_Subscription_SUCCESS
  };
};
const AddSubscriptionField = () => {
  return {
    type: actionTypes.Add_Subscription_FAILED,
  };
};


export const AddSubscription = (data) => {
  console.log("data=>", data)
  let handler = {
      email: data.email,
    

  }
  console.log(handler)
  return dispatch => {
    // dispatch(AddProductStart());
    instance
      .post("/subscription", handler)
      .then(response => {
        console.log(" daaaaaxx ", response.data);
        return dispatch(AddSubscriptionSuccess());
      })
      .catch(error => {
        return dispatch(AddSubscriptionField());
      });
  };
};
