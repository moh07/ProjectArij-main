import instance from "../../axios";
import instanceupload from "../../axiosupload";
import * as actionTypes from "./actionTypes";

const getProductsStart = () => {
  console.log("api Products started");
  return {
    type: actionTypes.GET_PRODUCTS_START,
  };
};
const getProductsSuccess = products => {
  console.log("api Products success");
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    products,
  };
};
const getProductsField = () => {
  console.log("api Products field");
  return {
    type: actionTypes.GET_PRODUCTS_FAILED,
  };
};
export const getProducts = () => {
  return dispatch => {
    dispatch(getProductsStart());
    instance
      .get("/products")
      .then(response => {
        console.log("products => ", response.data);
        return dispatch(getProductsSuccess(response.data));
      })
      .catch(error => {
        console.log("error =>  ", error);
        return dispatch(getProductsField());
      });
  };
};

// SEARCH_BY_ITEM

const getSearchStart = () => {
  console.log("api Products started");
  return {
    type: actionTypes.SEARCH_BY_ITEM_START,
  };
};
const getSearchSuccess = products => {
  console.log("api Products success");
  return {
    type: actionTypes.SEARCH_BY_ITEM_SUCESS,
    products,
  };
};
export const getSearchField = () => {
  console.log("api Products field");
  return {
    type: actionTypes.SEARCH_BY_ITEM_FAILED,
  };
};

export const searchByItem = item => {
  return dispatch => {
    dispatch(getSearchStart());
    console.log("search start ");
    instance
      .post("/product/byTitle/", {
        title: item,
      })
      .then(response => {
        console.log("search => ", response.data);
        return dispatch(getSearchSuccess(response.data));
      })
      .catch(error => {
        console.log("error =>  ", error);
        console.log("search failed ");
        return dispatch(getProductsField());
      });
  };
};





// ------------------ ------- -----------------------




// ------------------ ADD Product -----------------------

const AddProductSuccess = () => {

  return {
    type: actionTypes.AddProduct_SUCESS
  };
};


export const AddProductField = (data) => {
  console.log("data=>", data)
  let handler = {
    imagePrincipale: data[0],
    image1: data[1],
    image2 : data[2] ,
    //specification: data.dsscription2,
    //quantity: parseInt(data.qte),
    //DetailImage: data.image2,
   //DescriptionImage: data.image3,
    //categoryId: data.CategoryId,

  }
  console.log(data)
  
  return dispatch => {
    // dispatch(AddProductStart());
    instance
      .post("/products/Upload", data)
      .then(response => {
        console.log(" daaaaa ", response.data);
        return dispatch(AddProductSuccess());
      })
      .catch(error => {
        return dispatch(AddProductField());
      });
  };
};
export const AddProduct = (data,list) => {
  var bodyFormData = new FormData();
  console.log("data=>", list[0])

  bodyFormData.append("imagePrincipale",list[0].originFileObj);
  bodyFormData.append("image1",list[1].originFileObj);
  bodyFormData.append("image2",list[2].originFileObj);
  bodyFormData.append("dto",data);

  return dispatch => {
    // dispatch(AddProductStart());
    instanceupload
      .post("/products/Upload", bodyFormData)
      .then(response => {
        console.log(" daaaaa ", response.data);
        return dispatch(AddProductSuccess());
      })
      .catch(error => {
      });
  };
};

export const handle_Product_modification = (data) => {
  console.log("data=>", data)
  return {
    type: actionTypes.Handle_Product_Modification,
    data
  }
}

export const UpdateProduct = (data, id) => {
  console.log("data=>", data)
  let handler = {
    title: data.name,
    description: data.dsscription,
 
    image: data.Image,
    DetailImage: data.DetailImage,
    DescriptionImage: data.DescriptionImage,
    categoryId: data.CategoryId,
    totalRating: 0
  }
  console.log(handler)
  return dispatch => {
    // dispatch(AddProductStart());
    instance
      .put("/product/" + id, handler)
      .then(response => {
        console.log(" daaaaa ", response.data);
        // return dispatch(AddProductSuccess());
      })
      .catch(error => {
        // return dispatch(AddProductField());
      });
  };
};


// ------------------ delete Product -----------------------



const deletProductStart = () => {
  return {
    type: actionTypes.DELETE_PRODUCT_START
  }
};
const deleteProductSuccess = (id) => {
  return {
    type: actionTypes.DELETE_PRODUCT_SUCCESS,
    id
  }
};
const deleteProductFailed = () => {
  return {
    type: actionTypes.DELETE_PRODUCT_FAILED
  }
};

export const deleteProduct = (id) => {
  return dispatch => {
    dispatch(deletProductStart());
    instance.delete(`/product/${id}`).then(response => {
      console.log('product deleted ', response);
      return dispatch(deleteProductSuccess(id));
    }).catch(error => {
      console.log("error => ", error.message);
      dispatch(deleteProductFailed());
    });
  }
};




// ---------------------------------------------
