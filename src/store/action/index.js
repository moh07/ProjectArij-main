
export {  modifyCategory, deleteCategory } from "./category";
export { getProducts } from "./products";
export { deleteOrder } from "./Orders";
export { getQuestions } from "./Question";

export { getDevisAdmin,getDevisUser,DeleteDevisAdmin,DetailDevis,SendEMAIL} from "./Devis";
export { addItemToFav,deleteItemFromFav,refreshFav} from "./fav";

export {
  addItemToCart,
  deleteItemFromCart,
  incrementQte,
  decrementQte,
  resetCart,
  refreshCart
} from "./cart";
export { auth, checkTokenFromLocalStroage, rediractor, userLogout } from "./auth";
export { SignUp } from "./registre";
export { deleteCustomer,getCustomerById} from "./Customers";
