import instance from "../../axios";
import * as actionTypes from "./actionTypes";

// const getCustomersStart = () => {
//   console.log("api Products started");
//   return {
//     type: actionTypes.GET_CUSTOMERS_START,
//   };
// };
export const getCustomersSuccess = customer => {
    console.log("api Products success");
    return {
        type: actionTypes.GET_CUSTOMERS_SUCCESS,
        customer,
    };
};
export const getCustomersField = (error) => {
    console.log("api Products field");
    return {
        type: actionTypes.GET_CUSTOMERS_FAILED, error
    };
};

export const getCustomers = () => {
    return dispatch => {
        // dispatch(getCustomersStart());
        instance
            .get("/person/get")
            .then(response => {
                console.log("customers=> ", response.data);
                return dispatch(getCustomersSuccess(response.data));
            })
            .catch(error => {
                console.log("error =>  ", error);
                return dispatch(getCustomersField(error.response.data));
            });
    };
};

// ------------------ delete Customer -----------------------



const deletCustomertStart = () => {
    return {
        type: actionTypes.DELETE_CUSTOMER_START
    }
  };
  const deleteCustomerSuccess = (id) => {
    return {
        type: actionTypes.DELETE_CUSTOMER_SUCCESS,
        id
    }
  };
  const deleteCustomerFailed = () => {
    return {
        type: actionTypes.DELETE_CUSTOMER_FAILED
    }
  };
  
  export const  deleteCustomer = (id) => {
    return dispatch  => {
        dispatch(deletCustomertStart());
        instance.delete(`/customer/${id}`).then(response => {
            console.log('Customer deleted ',response);
            return  dispatch(deleteCustomerSuccess(id));
        }).catch(error => {
            console.log("error => ",error.message);
            dispatch(deleteCustomerFailed());
        });
    }
  };
  
  
  
  // ------------------------get custmer by id---------------------

  export const getCustomerByIdSuccess = (id) => {
    console.log("api custumor success");
    return {
        type: actionTypes.GET_CUSTOMERS_By_Id_SUCCESS,
        id,
    };
};
export const getCustomersByIdFailed = (error) => {
    console.log("api customer field");
    return {
        type: actionTypes.GET_CUSTOMERS_By_Id_FAILED, error
    };
};

export const getCustomerById = (id) => {
    return dispatch => {
        // dispatch(getCustomersStart());
        instance
            .get(`person/getbyid/${id}`)
            .then(response => {
                console.log("customers=> ", response.data);
                return dispatch(getCustomerByIdSuccess(response.data));
            })
            .catch(error => {
                console.log("error =>  ", error);
                return dispatch(getCustomersByIdFailed(error.response.data));
            });
    };
};