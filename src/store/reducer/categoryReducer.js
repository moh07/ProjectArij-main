import * as actionTypes from "../action/actionTypes";
import { updateObject } from "../utility";
const initialState = {
  categorys: [],
  categoryProducts: [],
  cat: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORY_START:
      return state;
    case actionTypes.GET_CATEGORY_SUCCESS:
      return updateObject(state, { categorys: action.categorys });
    case actionTypes.GET_CATEGORY_FAILED:
      return state;
    case actionTypes.GET_CATEGORY_PRODUCTS_START:
      return state;
    case actionTypes.GET_CATEGORY_PRODUCTS_SUCCESS:
      return updateObject(state, { categoryProducts: action.products });
    case actionTypes.GET_CATEGORY_PRODUCTS_FAILED:
      return state;
    default:
      return state;

// ------------------------
    case actionTypes.DELETE_CATEGORY_START :
      return state;
  case actionTypes.DELETE_CATEGORY_SUCCESS :
      return updateObject(state, {cat: state.cat.filter(v => v.id !== action.id)});
// -------------------------

case actionTypes.MODIFY_CATEGORY_START:
  return state;
case actionTypes.MODIFY_CATEGORY_SUCCESS:
  return updateObject(state, {
    upcategorys: state.upcategorys.map(value => {
      console.log('value.id => ', value.id, 'action.id => ', action.Category.id);
      if (value.id === action.Category.id) {
        console.log(action.Category.id, 'updated')
        value.title = action.Category.title;
        value.titleAr = action.Category.titleAr;
      }
      return value;
    })
  });

// -------------------------
  }
};
export default reducer;
