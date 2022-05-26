import React, { useState, useEffect } from "react";
import "./facture.css";
import logo from "../../assets/Images/logo.png";
import cart from "../../assets/Images/cart.png";
import { useDispatch, useSelector } from "react-redux"
import * as actions from "../../../store/action/Orders";

const Facture = () => {
  const factureHolder = useSelector(state => state.rootReducer.FactureHolder)

  useEffect(() => {
    console.log("asza :=> ", factureHolder);
  }, [factureHolder]);
                                 

  let ProdHandler = JSON.parse(localStorage.getItem('prodModification'))

  return (
    <div>
      <div className="my-5 page" size="A4">
        <div className="p-5">
          <section className="top-content bb d-flex justify-content-between">
            <div className="logo">
              <img src={logo} alt="" className="img-fluid" />
            </div>
            <div className="top-left">
              <div className="graphic-path">
                <p>Price Cotation</p>
              </div>
              <div className="position-relative">
                <p>
                  Price Cotation: <span>#{ProdHandler.id}</span>
                </p>
              </div>
            </div>
          </section>

          <section className="store-user mt-5">
            <div className="col-10">
              <div className="row bb pb-3">
                <div className="col-7">
                  <p>Supplier,</p>
                  <h2>MAFI</h2>
                  <p className="address">
                    {" "}
                    Rue Taieb Mhiri, Manouba{" "}
                  </p>
                  {/* <div className="txn mt-2">TXN: XXXXXXX</div> */}
                </div>
                <div className="col-5">
                  <p>Client</p>
                  <h2>{ProdHandler.clientName}{ProdHandler.clientLastName}</h2>
                  {/* <h2>Housssem Troudi</h2> */}
                  <p className="address">
                    {" "}
                    {ProdHandler.ClientAddress}
                    {/* el khitmin 7081 */}
                  </p>
                  {/* <div className="txn mt-2">MF: XXXXXXX</div> */}
                </div>
              </div>
              <div className="row extra-info pt-3">
                <div className="col-7">

                  <p>
                    Order Number: <span>#{ProdHandler.id}</span>
                  </p>
                </div>
                <div className="col-5">
                  <p>
                    Order Date: <span>{ProdHandler.createdAt.split("T")[0]}</span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="product-area mt-4">
            <table className="table table-hover">
              <thead>
                <tr>
                  <td>Item Description</td>
                  <td>Price</td>
                  <td>Quantity</td>
                  <td>Discount %</td>
                  <td>After Discount</td>
                  <td>Total</td>
                </tr>
              </thead>
              <tbody>
                {/* {factureHolder ?
                  factureHolder.map((e) => { */}
                <tr>
                  <td>
                    <div className="media">
                      <img
                        className="mr-3 img-fluid"
                        src="mobile.jpg"
                        alt="Product 01"
                      />
                      <div className="media-body">
                        <p className="mt-0 title">Media heading</p>
                        Cras sit amet nibh libero, in gravida nulla.
                      </div>
                    </div>
                  </td>
                  {/* <td>{factureHolder.id[0]}</td> */}
                  <td>1</td>
                  <td>0%</td>
                  <td>200$</td>
                  <td>200$</td>
                </tr>
                <tr>
                  <td>
                    <div className="media">
                      <img
                        className="mr-3 img-fluid"
                        src="mobile-2.jpg"
                        alt="Product 01"
                      />
                      <div className="media-body">
                        <p className="mt-0 title">Media heading</p>
                        Cras sit amet nibh libero, in gravida nulla.
                      </div>
                    </div>
                  </td>
                  <td>300$</td>
                  <td>2</td>
                  <td>0%</td>
                  <td>600$</td>
                  <td>600$</td>
                </tr>
                  
              </tbody>
            </table>
          </section>

          <section className="balance-info">
            <div className="row">
              <div className="col-8">
                <p className="m-0 font-weight-bold"> Note: </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                  delectus, adipisci vero est dolore praesentium.
                </p>
              </div>
              <div className="col-4">
                <table className="table border-0 table-hover">
                  <tr>
                    <td>Sub Total:</td>
                    <td>800$</td>
                  </tr>
                  <tr>
                    <td>Tax:</td>
                    <td>15$</td>
                  </tr>
                  <tr>
                    <td>Deliver:</td>
                    <td>10$</td>
                  </tr>
                  <tfoot>
                    <tr>
                      <td>Total:</td>
                      <td>825$</td>
                    </tr>
                  </tfoot>
                </table>

                {/* <!-- Signature --> */}
                <div className="col-12">
                  <img src="signature.png" className="img-fluid" alt="" />
                  <p className="text-center m-0"> Director Signature </p>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Cart BG --> */}
          <img src={cart} className="img-fluid cart-bg" alt="" />

          <footer className="footer-facture">
            <hr />
            <p className="m-0 text-center">
              View THis Price Cotation Online At -{" "}
              <a href="#!"> PriceCotation/mafi.tn/#868 </a>
            </p>
            <div className="social pt-3">
              <span className="pr-2">
                <i className="fas fa-mobile-alt"></i>
                <span>0123456789</span>
              </span>
              <span className="pr-2">
                <i className="fas fa-envelope"></i>
                <span>me@saburali.com</span>
              </span>
              <span className="pr-2">
                <i className="fab fa-facebook-f"></i>
                <span>/sabur.7264</span>
              </span>
              <span className="pr-2">
                <i className="fab fa-youtube"></i>
                <span>/abdussabur</span>
              </span>
              <span className="pr-2">
                <i className="fab fa-github"></i>
                <span>/example</span>
              </span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Facture;
