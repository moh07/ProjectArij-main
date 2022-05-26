import React, { useEffect } from "react";
import Deliverydetails from "./delivery";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../Components/loader/index";
import { Redirect } from "react-router-dom";
import * as actions from "../../store/action/index";
import { Footer } from "../../Containers/index";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { validation, resetCardAfterValidation } from "../../store/action/cart";
import { useHistory } from "react-router-dom";





const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Checkout = () => {
  let history = useHistory();
  const classes = useStyles();
  const token = useSelector((state) => state.rootReducer.token);
  const user = useSelector((state) => state.rootReducer.user);
  const cart = useSelector((state) => state.rootReducer.cart);
  const state = {
    isLoaded: false,
    subTotal: "",
    discount: "",
    deliveryCharge: 0,
    grandTotal: "",
    email: "",
    customer: "",
    paymentmethod: "",
    deliveryAddress: "",
  };
  const dispatch = useDispatch();
  /*useEffect(() => {
    dispatch(actions.rediractor("/checkout"));
  }, []);*/

  

  if (!token && !localStorage.getItem("token")) {
    setTimeout(() => {
     // $("#logInModal").modal("show");
      console.log("execution");
    }, 1);
    return <Redirect to="/" />;
  }

  const onconfirm = () => {
    let handler
    let prodData = []
    let total = 0;
    if (cart) {
      cart.map((item) => {
        prodData.push({ "productId": item.id, "quantity": item.qte })
        total = total + (item.prix * item.qte)
      })
    }
    handler = {
      "customerId": user.sub,
      "totalPrice": total, products: prodData
    }
    console.log("handlerdata=>", handler)
    dispatch(validation(handler))
    dispatch(resetCardAfterValidation())
    history.push("/"); 
    // ---------------history-push-----------

  }



  return (
    <div>
      <div className="container-chemain">
        <div className="row">
          <div className="col-md-12">
            <a href="/">
              <strong>
                <span className="mdi mdi-home"></span> Home
              </strong>
            </a>{" "}
            <span className="mdi mdi-chevron-right"></span> <a>Checkout</a>
          </div>
        </div>
      </div>

      <section className="checkout-page section-padding">
        <div className="container">
          {state.isLoaded ? <Loader /> : ""}
          <div className="row">
            {/* ------ici------- */}
            <div className="col-md-8">
              <div className="checkout-step">
                <div className="accordion" id="accordionExample">
                  <div className="card checkout-step-one">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link checkout-login-bk"
                          disabled
                        >
                          <span className="number">1</span> Login{" "}
                          <span className="mdi mdi-checkbox-marked-circle-outline"></span>
                        </button>
                        <div className="_2jDL7w">
                          <div>
                            <span className="dNZmcB">
                              {state.customer.firstName}{" "}
                            </span>
                            <span className="_3MeY5j">{state.email}</span>
                          </div>
                        </div>
                      </h5>
                    </div>
                  </div>
                  {/* -----adress ----- */}
                  {/* <div className="card checkout-step-two">
                    <div className="card-header" id="headingTwo">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <span className="number">2</span> Delivery Address
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <Deliverydetails
                        onSelectDeliveryAddress={state.handleDeliveryAddress}
                      />
                    </div>
                  </div> */}

                  {/* ----------- payment -------------- */}
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <span className="number">3</span> Validation
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div className="checkout-step-body">
                        <div className="payment_method-checkout">
                          <div className="row">
                            <div className="col-md-12">

                              {/* ------Button do you wont to confirm your order ------- */}
                              <div className="row validation">
                                <div classNam="col-10">
                                  <h2>Do you want to confirm your order ?</h2>
                                </div>
                                <div classNam="col-2">
                                  {/* <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button}
                                  // startIcon={<DeleteIcon />}
                                  >
                                    Cancel
                                  </Button> */}
                                  {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
                                  <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    onClick={() => onconfirm()}
                                  // endIcon={<Icon>send</Icon>}
                                  >
                                    Confirm
                                  </Button>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ------ici------- */}

            <div className="col-md-4">
              <div className="card">
                <h5 className="card-header">
                  My Cart{" "}
                  <span className="text-secondary float-right">({cart.length} Item)</span>
                </h5>

                <div className="card-body pt-0 pr-0 pl-0 pb-0">
                  {
                    cart.length > 0 ? cart.map(v => {

                      console.log("v", v)
                      return (<div className="cart-list-product">
                        <img
                          className="img-fluid"
                          // src={v.img}
                          src={process.env.PUBLIC_URL+"/image/"+v.img}
                          alt="cart"
                        />
                        {/* <span className="badge badge-success">50% OFF</span> */}
                        <h5>
                          {v.name}
                        </h5>
                        <h6>
                          <strong>
                            <span className="mdi mdi-approval" /> Available in
                          </strong>{" "}
                          - Stock
                        </h6>
                        <p className="offer-price mb-0">
                          {v.prix} TND <i className="mdi mdi-tag-outline" />{" "}
                          {/* <span className="regular-price">845.2 TND</span> */}
                        </p>
                      </div>)
                    }) :
                      null
                  }

                </div>

                {/* <div className="total-checkout-group">
                  <div className="cart-total-dil">
                    <h4>Sub Total</h4>
                    <span>15.5 TND</span>
                  </div>
                  <div className="cart-total-dil pt-3">
                    <h4>Delivery Charges</h4>
                    <span>415 TND</span>
                  </div>
                </div> */}
                <div className="cart-total-dil saving-total ">
                  <h4>Total Saving</h4>
                  <span>{cart.reduce((a, b) => {
                    return a + b.prix * b.qte;
                  }, 0)} TND{state.discount}</span>
                </div>
                <div className="main-total-cart">
                  <h2>Total</h2>
                  <span>{cart.reduce((a, b) => {
                    return a + b.prix * b.qte;
                  }, 0)} TND{state.grandTotal}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Checkout;
