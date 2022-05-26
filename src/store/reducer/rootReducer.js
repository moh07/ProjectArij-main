import * as actionTypes from "../action/actionTypes";
import {updateObject} from "../utility";

const decodeToken = (token) => {
    let base64Url = token.split(".")[1];
    let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    let jsonPayload = decodeURIComponent(atob(base64).split("").map(function (c) {
        return "%" + (
            "00" + c.charCodeAt(0).toString(16)
        ).slice(-2);
    }).join(""));
    return JSON.parse(jsonPayload);
};
const initialState = {
    token: null,
    products: [],
    cart: [],
    fav: [],
    rediractor: "/",
    searchResults: [],
    AuthError: false,
    errorMssage: "",
    AuthLoading: false,
    username: null,
    register: false,
    user: null,
    order: [],
    DeleteDevisAdmin: false,
    DetailDevis: {},
    menu: "",
    devisAdmin: [],
    devisUser: [],
    orderDel: [],
    customer: [],
    customerById :[] ,
    customerError: [],
    customerDel: [],
    AddProduct: false,
    AddLoading: false,
    ProductHandler: null,
    questions: [],
    Categorys: [],
    technicalSupport: [],
    subscription: [],
    productsdash: [],
    upcategorys: [],
    FactureHolder: null,
    language: "english"
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_BY_ITEM_START:
            return state;
        case actionTypes.SEARCH_BY_ITEM_SUCESS:
            return updateObject(state, {searchResults: action.products});
        case actionTypes.SEARCH_BY_ITEM_FAILED:
            return state;
        case actionTypes.REDIRACT:
            return updateObject(state, {rediractor: action.url});
        case actionTypes.LOGOUT:
            console.log("i'm here RootReducer logout ");
            // localStorage.removeItem("cart");
            //localStorage.removeItem("fav");
            return updateObject(state, {
                token: null,
                rediractor: "/",
                cart: [],
                fav: []
            });
        case actionTypes.AUTH_START:
            return updateObject(state, {AuthLoading: true});
        case actionTypes.AUTH_SUCCESS:
            console.log("decode", decodeToken(action.token));
            return updateObject(state, {
                token: action.token,
                AuthError: false,
                AuthLoading: false,
                user: decodeToken(action.token),
                username: decodeToken(action.token).email.split("@")[0]
            });
        case actionTypes.AUTH_FAILED:
            console.log("action.message ", action.message);
            return updateObject(state, {
                AuthError: true,
                AuthLoading: false,
                errorMssage: action.message
            });
        case actionTypes.SIGNUP_START:
            return updateObject(state, {AuthLoading: true});
        case actionTypes.SIGNUP_SUCESS:
            return updateObject(state, {
                register: true,
                AuthLoading: false
            });
        case actionTypes.SIGNUP_FAILED:
            return updateObject(state, {
                register: false,
                AuthLoading: false
            });
        case actionTypes.GET_PRODUCTS_START:
            return state;
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return updateObject(state, {products: action.products});
        case actionTypes.GET_PRODUCTS_FAILED:
            return state;
        case actionTypes.INCREMENT_QTE_PROUDUCT:
            return updateObject(state, {
                cart: state.cart.map((v) => {
                    if (v.id === action.itemId && v.quantity >= v.qte + 1) {
                        v.qte ++;
                        return v;
                    }
                    return v;
                })
            });
        case actionTypes.DECREMENT_QTE_PROUDUCT:
            return updateObject(state, {
                cart: state.cart.map((v) => {
                    if (v.id === action.itemId && v.qte > 1) {
                        v.qte --;
                        return v;
                    }
                    return v;
                })
            });
        case actionTypes.ADD_ITEM_TO_CART:
            if (!state.cart.find((v) => v.id === action.item.id)) 
                return updateObject(state, {
                    cart: [
                        ...state.cart,
                        action.item
                    ]
                });
             else 
                return updateObject(state, {
                    cart: state.cart.map((v) => {
                        if (v.id === action.item.id) {
                            v.qte ++;
                            return v;
                        }
                        return v;
                    })
                });
            


        case actionTypes.DELETE_ITEM_FROM_CART:
            console.log("DELETE_ITEM_FROM_CART ", action.itemId, state.cart)
            return updateObject(state, {
                cart: state.cart.filter((v) => {
                    return v.id !== action.itemId;
                })
            });
        case actionTypes.ADD_ITEM_TO_FAV:
            if (!state.fav.find((v) => v.id === action.item.id)) 
                return updateObject(state, {
                    fav: [
                        ...state.fav,
                        action.item
                    ]
                });
             else 
                return state;

        case actionTypes.GET_FAV:
            return state;
        case actionTypes.REFRESH_FAV:
            return updateObject(state, {fav: action.data});
        case actionTypes.DELETE_ITEM_FROM_FAV:
            return updateObject(state, {
                fav: state.fav.filter((v) => {
                    return v.id !== action.itemId;
                })
            });
        case actionTypes.RESET_CART:
            return updateObject(state, {cart: action.data});
        case actionTypes.REFRESH_CART:
            return updateObject(state, {cart: action.data});
        case actionTypes.REST_CARD_AFTER_VALIDATION:
            return updateObject(state, {cart: []});

        case actionTypes.GET_CUSTOMERS_SUCCESS:
            return updateObject(state, {customer: action.customer});
        case actionTypes.GET_CUSTOMERS_FAILED:
            return updateObject(state, {customerError: action.customer});


            case actionTypes.GET_CUSTOMERS_By_Id_SUCCESS:
            return updateObject(state, {customerById: action.customerById});
        case actionTypes.GET_CUSTOMERS_By_Id_FAILED:
            return updateObject(state, {customerError: action.customerById});

        case actionTypes.GET_ORDERS_SUCCESS:
            return updateObject(state, {order: action.order});

        case actionTypes.AddProduct_START:
            return state;
        case actionTypes.AddProduct_SUCESS:
            return updateObject(state, {
                AddProduct: true,
                AddLoading: false
            });
        case actionTypes.AddProduct_FAILED:
            return updateObject(state, {
                AddProduct: false,
                AddLoading: false
            });
        case actionTypes.Handle_Product_Modification:
            console.log("rootREducer=>", action.data);
            return updateObject(state, {ProductHandler: action});

            // case actionTypes.GET_ORDERS_ID_SUCCESS:
            // return updateObject(state, { orderId: action.orderId })
            // case actionTypes.GET_ORDERS_ID_FAILED:
            // return updateObject(state, { customerError: action.orderId });

            // -------------------------

            // ------------DEVIS-------------
        case actionTypes.AddDevisAdmin_SUCESS:
            return updateObject(state, {
                AddDevisAdmin: true,
                AddLoading: false
            });
        case actionTypes.AddDevisAdmin_FAILED:
            return updateObject(state, {
                AddDevisAdmin: false,
                AddLoading: false
            });

        case actionTypes.DeleteDevisAdmin_SUCESS:
            return updateObject(state, {DeleteDevisAdmin: true});
        case actionTypes.DeleteDevisAdmin_FAILED:
            return updateObject(state, {DeleteDevisAdmin: false});

        case actionTypes.DetailDevis_START:
            return state;
        case actionTypes.DetailDevis_SUCCESS:
            return updateObject(state, {DetailDevis: action.devisdetails});
        case actionTypes.DetailDevis_FAILED:
            return updateObject(state, {DetailDevis: null});


        case actionTypes.GET_DevisAdmin_START:
            return state;
        case actionTypes.GET_DevisAdmin_SUCCESS:
            console.log('from root ', action.devisAdmin)
            return updateObject(state, {devisAdmin: action.devisAdmin});
        case actionTypes.GET_DevisAdmin_FAILED:
            return state;
            // -------------------------
        case actionTypes.GET_DevisUser_START:
            return state;
        case actionTypes.GET_DevisUser_SUCCESS:
            console.log('from root ', action.devisUser)
            return updateObject(state, {devisUser: action.devisUser});
        case actionTypes.GET_DevisUser_FAILED:
            return state;
            // -------------------------------------
        case actionTypes.AddQuestion_SUCESS:
            return updateObject(state, {
                AddQuestion: true,
                AddLoading: false
            });
        case actionTypes.AddQuestion_FAILED:
            return updateObject(state, {
                AddQuestion: false,
                AddLoading: false
            });

        case actionTypes.GET_Questions_START:
            return state;
        case actionTypes.GET_Questions_SUCCESS:
            return updateObject(state, {questions: action.questions});
        case actionTypes.GET_Questions_FAILED:
            return state;
            // -------------------------

        case actionTypes.Add_Category_SUCCESS:
            return updateObject(state, {
                AddCategory: true,
                AddLoading: false
            });
        case actionTypes.Add_Category_FAILED:
            return updateObject(state, {
                AddCategory: false,
                AddLoading: false
            });

            // -------------------------

        case actionTypes.Add_TechnicalSupport_SUCESS:
            return updateObject(state, {
                technicalSupport: true,
                AddLoading: false
            });
        case actionTypes.Add_TechnicalSupport_FAILED:
            return updateObject(state, {
                technicalSupport: false,
                AddLoading: false
            });

            // case actionTypes.Add_MachineMaintenance_SUCCESS:
            // return updateObject(state, { machineMaintenance: true, AddLoading: false });
            // case actionTypes.Add_MachineMaintenance_FAILED:
            // return updateObject(state, { machineMaintenance: false, AddLoading: false });
            // -------------------------

        case actionTypes.Add_Subscription_SUCCESS:
            return updateObject(state, {
                subscription: true,
                AddLoading: false
            });
        case actionTypes.Add_Subscription_FAILED:
            return updateObject(state, {
                subscription: false,
                AddLoading: false
            });

            // -------------------------
        case actionTypes.DELETE_PRODUCT_START:
            return state;
        case actionTypes.DELETE_PRODUCT_SUCCESS:
            return updateObject(state, {
                productsdash: state.productsdash.filter((v) => v.id !== action.id)
            });
            // -------------------------
        case actionTypes.DELETE_CUSTOMER_START:
            return state;
        case actionTypes.DELETE_CUSTOMER_SUCCESS:
            return updateObject(state, {
                customerDel: state.customerDel.filter((v) => v.id !== action.id)
            });
            // -------------------------
        case actionTypes.DELETE_ORDER_START:
            return state;
        case actionTypes.DELETE_ORDER_SUCCESS:
            return updateObject(state, {
                order: state.order.filter((v) => v.id !== action.id)
            });
            // -------------------------
        case actionTypes.FACTURE_HOLDER:
            return updateObject(state, {FactureHolder: action.facture});
            // ----------------------------
        case actionTypes.CHANGE_LANGUAGE:
            return updateObject(state, {language: action.lang});

        default:
            return state;
    }
};
export default reducer;
