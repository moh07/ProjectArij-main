import instance from "../../axios";
import * as actionTypes from "./actionTypes";
/*
const getCategoryStart = () => {
  console.log("api Category started");
  return {
    type: actionTypes.GET_CATEGORY_START,
  };
};
const getCategorySuccess = categorys => {
  console.log("api Category success");
  return {
    type: actionTypes.GET_CATEGORY_SUCCESS,
    categorys,
  };
};
const getCategoryField = () => {
  console.log("api Category field");
  return {
    type: actionTypes.GET_CATEGORY_FAILED,
  };
};
export const getCategory = () => {
  return dispatch => {
    dispatch(getCategoryStart());
    instance
      .get("/category")
      .then(response => {
        console.log("actionCatgory => ", response.data);
        console.log(
          "debuger =>",
          console.log(
            "debuger =>",
            response.data.map(v => {
              return { title: v.title, titleAr: v.titleAr, id: v.id };
            })
          )
        );
        return dispatch(
          getCategorySuccess(
            response.data.map(v => {
              return { title: v.title,titleAr: v.titleAr, id: v.id };
            })
          )
        );
      })
      .catch(error => {
        console.log("error =>  ", error);
        return dispatch(getCategoryField());
      });
  };
};
*/
/*
 ** ctegory product api
 */

// const getCategoryProductStart = () => {
//   console.log("api Category started");
//   return {
//     type: actionTypes.GET_CATEGORY_PRODUCTS_START,
//   };
// };
// const getCategoryProductSuccess = products => {
//   console.log("api Category success");
//   return {
//     type: actionTypes.GET_CATEGORY_PRODUCTS_SUCCESS,
//     products,
//   };
// };
// const getCategoryProductField = () => {
//   console.log("api Category field");
//   return {
//     type: actionTypes.GET_CATEGORY_PRODUCTS_FAILED,
//   };
// };
// export const getCategoryProduct = category => {
//   return dispatch => {
//     dispatch(getCategoryProductStart());
//     instance
//       .get(`/products/category/${category}`)
//       .then(response => {
//         console.log("actionCatgoryProduct => ", response.data);
//         return dispatch(getCategoryProductSuccess(response.data));
//       })
//       .catch(error => {
//         console.log("error =>  ", error);
//         return dispatch(getCategoryProductField());
//       });
//   };
// };

// ------------------Add Category--------------------


const AddCategorySuccess = () => {

  return {
    type: actionTypes.Add_Category_SUCCESS
  };
};
const AddCategoryField = () => {
  return {
    type: actionTypes.Add_Category_FAILED,
  };
};


export const AddCategory = (data) => {
  console.log("data=>", data)
  let handler = {
    title: data.title,
    titleAr: data.titleAr,
    

  }
  console.log(handler)
  return dispatch => {
    // dispatch(AddProductStart());
    instance
      .post("/category", handler)
      .then(response => {
        console.log(" daaaaaxx ", response.data);
        return dispatch(AddCategorySuccess());
      })
      .catch(error => {
        return dispatch(AddCategoryField());
      });
  };
};
// --------------------------------------


// export const deleteCategory = (catId) => {
//   return (dispatch) =>
//     dispatch({
//       type: actionTypes.DELETE_CATEGORY,
//       catId,
//     });
// };

// -----------------------------------

const modifyCategoryStart = () => {
  return {
      type: actionTypes.MODIFY_CATEGORY_START
  }
};
const modifyCategorySuccess = (title,titleAr,id) => {
  console.log('hello');
  return {
      type: actionTypes.MODIFY_CATEGORY_SUCCESS,
      Category : {title,titleAr,id}
  }
};
const modifyCategoryFailed = () => {
  return {
      type: actionTypes.MODIFY_CATEGORY_FAILED
  }
};
export const modifyCategory = (title,titleAr,id) =>{
  return dispatch => {
      dispatch(modifyCategoryStart());
      instance.put(`/category/${id}`,{
        title: title,
        titleAr: titleAr ,
        id: id
      }).then(response =>{
          console.log('Category added' , response.data);
          return dispatch(modifyCategorySuccess(title,titleAr,id))
      }).catch(error => {
          console.log(error.message);
          return dispatch(modifyCategoryFailed()) 
      });
  }
};

// ------------------ delete Category -----------------------



const deletCategorytStart = () => {
  return {
      type: actionTypes.DELETE_CATEGORY_START
  }
};
const deleteCategorySuccess = (id) => {
  return {
      type: actionTypes.DELETE_CATEGORY_SUCCESS,
      id
  }
};
const deleteCategoryFailed = () => {
  return {
      type: actionTypes.DELETE_CATEGORY_FAILED
  }
};

export const  deleteCategory = (id) => {
  return dispatch  => {
      dispatch(deletCategorytStart());
      instance.delete(`/category/${id}`).then(response => {
          console.log('category deleted ',response);
          return  dispatch(deleteCategorySuccess(id));
      }).catch(error => {
          console.log("error => ",error.message);
          dispatch(deleteCategoryFailed());
      });
  }
};


// ---------------------------------------------


