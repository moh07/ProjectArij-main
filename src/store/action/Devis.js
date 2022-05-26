import instance from "../../axios";
import * as actionTypes from "./actionTypes";

const getDevisUserStart = () => {
  console.log("api DevisUser started");
  return {
    type: actionTypes.GET_DevisUser_START,
  };
};

const getDevisUserSuccess = devisUser => {
  console.log("api DevisUser success",devisUser);
  return {
    type: actionTypes.GET_DevisUser_SUCCESS,
    devisUser,
  };
};
const getDevisUserFailed = () => {
  console.log("api DevisUser field");
  return {
    type: actionTypes.GET_DevisUser_FAILED,
  };
};

const SendEmailsuccess = devisUser => {
  console.log("api SendEmail success",devisUser);
  return {
    type: actionTypes.GET_SendEmail_SUCCESS,
    devisUser,
  };
};
const SendEmailFailed = () => {
  console.log("api SendEmail field");
  return {
    type: actionTypes.GET_SendEmail_FAILED,
  };
};
export const getDevisUser = () => {
  return dispatch => {
    dispatch(getDevisUserStart());
    instance
      .get("/devis/get")
      .then(response => {
        console.log("devis => ", response.data);
        return dispatch(getDevisUserSuccess(response.data));
      })
      .catch(error => {
        console.log("error =>  ", error);
        return dispatch(getDevisUserFailed());
      });
  };
};

// ------------------------------------------------------------------------------------

const AddDevisAdminsuccess = () => {

  return { 
    type: actionTypes.AddDevisAdmin_SUCESS
  };
};
const AddDevisAdminFailed = () => {
  return {
    type: actionTypes.AddDevisAdmin_FAILED,
  };
};


export const AddDevisAdmin = (data) => {
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
    instance
      .post("/Devis", handler)
      .then(response => {
        console.log(" daaaaaxx ", response.data);
        return dispatch(AddDevisAdminsuccess());
      })
      .catch(error => {
        return dispatch(AddDevisAdminFailed());
      });
  };
};
 
export const SendEMAIL = (message,email,devisId) => {
  let handler = {
    message: message,
    email:   email,
    idDevis: devisId,
  }
  console.log(handler)
  return dispatch => {
    instance
      .post("/person/email", handler)
      .then(response => {
        console.log(" daaaaaxx ", response.data);
        return dispatch(getDevisAdmin());
      })
      .catch(error => {
        return dispatch(SendEmailFailed());
      });
  };
};
// ------------------------------------
const getDevisAdminStart = () => {
  console.log("api Devis started");
  return {
    type: actionTypes.GET_DevisAdmin_START,
  };
};

const getDevisAdminSuccess = devisAdmin => {
  console.log("api Devis success",devisAdmin);
  return {
    type: actionTypes.GET_DevisAdmin_SUCCESS,
    devisAdmin,
  };
};
const getDevisAdminFailed = () => {
  console.log("api Devis field");
  return {
    type: actionTypes.GET_DevisAdmin_FAILED,
  };
};
export const getDevisAdmin = () => {
  return dispatch => {
    dispatch(getDevisAdminStart());
    instance
      .get("/devis/getAll")
      .then(response => {
        console.log("devis => ", response.data);
        return dispatch(getDevisAdminSuccess(response.data));
      })
      .catch(error => {
        console.log("error =>  ", error);
        return dispatch(getDevisAdminFailed());
      });
  };
};

// ------------------------------------

const DeleteDevisAdminsuccess = () => {

  return { 
    type: actionTypes.DeleteDevisAdmin_SUCESS,
  };
};
const DeleteDevisAdminFailed = () => {
  return {
    type: actionTypes.DeleteDevisAdmin_FAILED,
  };
};


export const DeleteDevisAdmin = (id) => {
  console.log("data=>", id)
  return dispatch => {
    instance
      .delete(`/devis/delete/${id}`)
      .then(response => {
        console.log(" data from delete", response.data);
        dispatch(DeleteDevisAdminsuccess)
        return dispatch(getDevisAdmin());
      })
      .catch(error => {
        console.log(error)
        return dispatch(DeleteDevisAdminFailed());
      });
  };
};

// --------------------------- 

const DetailDevisStart = () => {
  console.log("Traitement started");
  return {
    type: actionTypes.DetailDevis_START,
  };
};

const DetailDevisSuccess = devisUser => {
  console.log("DetailDevisSuccess",devisUser)
  return {
    type: actionTypes.DetailDevis_SUCCESS,
    devisdetails : devisUser,
  };
};
const DetailDevisFailed = () => {
  return {
    type: actionTypes.DetailDevis_FAILED,
  };
};

export const DetailDevis = (id) => {
  console.log("here")
  return dispatch => {
    dispatch(DetailDevisStart());
    instance
      .get("/devis/getDevisDetails/" + id)
      .then(response => {
        console.log("devis => ", response.data);
        return dispatch(DetailDevisSuccess(response.data));
      })
      .catch(error => {
        console.log("error =>  ", error);
        return dispatch(DetailDevisFailed());
      });
  };
};
// export const DetailDevis = (id) => {
//   console.log("here")
//   return dispatch => {
//     dispatch(DetailDevisStart());
//     instance
//       .get("/devis/getDevisDetails/" + id)
//       .then(response => {
//         console.log("devis => ", response.data);
//         return dispatch(DetailDevisSuccess(response.data));
//       })
//       .catch(error => {
//         console.log("error =>  ", error);
//         return dispatch(DetailDevisFailed());
//       });
//   };
// };