import instance from "../../axios";
import * as actionTypes from "./actionTypes";

// const getOrdersStart = () => {
//   console.log("api Products started");
//   return {
//     type: actionTypes.GET_ORDERS_START,
//   };
// };
export const getOrdersSuccess = order => {
    console.log("api Products success");
    return {
        type: actionTypes.GET_ORDERS_SUCCESS,
        order,
    };
};
export const getOrdersField = (error) => {
    console.log("api Products field");
    return {
        type: actionTypes.GET_ORDERS_FAILED, error
    };
};

export const getOrders = () => {
    return dispatch => {
        // dispatch(getOrdersStart());
        instance
            .get("/devis/getAll")
            .then(response => {
                console.log("quotation=> ", response.data);
                return dispatch(getOrdersSuccess(response.data));
            })
            .catch(error => {
                console.log("error =>  ", error);
                return dispatch(getOrdersField(error.response.data));
            });
    };
};
export const getOrdersuser = () => {
    return dispatch => {
        // dispatch(getOrdersStart());
        instance
            .get("/commande/get")
            .then(response => {
                console.log("quotation=> ", response.data);
                return dispatch(getOrdersSuccess(response.data));
            })
            .catch(error => {
                console.log("error =>  ", error);
                return dispatch(getOrdersField(error.response.data));
            });
    };
};

// ---------------------BY ID-------------------
// export const getOrderIdSuccess = orderId => {
//     console.log("api Products success");
//     return {
//         type: actionTypes.GET_ORDERS_ID_SUCCESS,
//         orderId,
//     };
// };
// export const getOrderIdField = (error) => {
//     console.log("api Products field");
//     return {
//         type: actionTypes.GET_ORDERS_ID_FAILED, error
//     };
// };

// export const getOrderId = () => {
//     return dispatch => {
//         // dispatch(getOrdersStart());
//         instance
//             .get(`/quotation/id`)
//             .then(response => {
//                 console.log("quotation=> ", response.data);
//                 return dispatch(getOrderIdSuccess(response.data));
//             })
//             .catch(error => {
//                 console.log("error =>  ", error);
//                 return dispatch(getOrderIdField(error.response.data));
//             });
//     };
// };



// ------------------ delete Order -----------------------



const deletOrdertStart = () => {
    return {
        type: actionTypes.DELETE_ORDER_START
    }
  };
  const deleteOrderSuccess = (id) => {
    return {
        type: actionTypes.DELETE_ORDER_SUCCESS,
        id
    }
  };
  const deleteOrderFailed = () => {
    return {
        type: actionTypes.DELETE_ORDER_FAILED
    }
  };
  
  export const  deleteOrder = (id) => {
    return dispatch  => {
        dispatch(deletOrdertStart());
        instance.delete(`/quotation/${id}`).then(response => {
            console.log('Order deleted ',response);
            return  dispatch(deleteOrderSuccess(id));
        }).catch(error => {
            console.log("error => ",error.message);
            dispatch(deleteOrderFailed());
        });
    }
  };
  
  
  
  // ---------------------------------------------

  export const factureHolder=(val)=>{
      return {
          type:actionTypes.FACTURE_HOLDER,
            facture:val
      }
  }