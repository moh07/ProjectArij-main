import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import logo from "../../assets/Images/logo.png";
import cart from "../../assets/Images/cart.png";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import { Link } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import SendIcon from '@material-ui/icons/Send';
import SaveIcon from '@material-ui/icons/Save';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import { InputNumber } from 'antd';
import { factureHolder } from '../../../store/action/Orders'
import { useDispatch, useSelector } from "react-redux"

function onChange(value) {
  console.log('changed', value);
}


const useStyles = makeStyles((theme) => ({

  button: {
    margin: theme.spacing(1),
  },
}));
const Discount = ({ name, total, qte, prix, after }) => {
  const dispatch = useDispatch()
  let ProdHandler = JSON.parse(localStorage.getItem('prodModification'))
  const { products } = ProdHandler

  const updatedValues = products.map(item => {
    let value = { ...item, total: 0 }
    return value
  })

  const [values, setValues] = useState(updatedValues)

  const increment = (id) => {
    const list = [...values]
    const index = updatedValues.findIndex(item => item.id === id)
    list[index].total = list[index].total + 1;
    setValues(list);
    dispatch(factureHolder(values))
  }

  const decrement = (id) => {
    const list = [...values]
    const index = updatedValues.findIndex(item => item.id === id)
    list[index].total = list[index].total - 1;
    setValues(list);
    dispatch(factureHolder(values))

  }


  const classes = useStyles();

  return (
    <div>
      <div className=" row card-header pb-0">
        <div className="col-2">
          {/* <h6>Order List</h6> */}
        </div>
        <div className="col-10">
          <div
            className="sarchbar-add-btn"
            style={{ marginBottom: "0.5rem" }}
          >
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              endIcon={<SaveIcon>Export</SaveIcon>}
            >
              Save
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              endIcon={<SendIcon>send</SendIcon>}
            >
              Send
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              endIcon={<CloudDownloadIcon>Export</CloudDownloadIcon>}
            >
              Export
            </Button>


          </div>
        </div>
      </div>
      <div className="card-body px-0 pt-0 pb-2">
        <div className="table-responsive p-0">
          <table className="table align-items-center mb-0">
            <thead>
              <tr>
                <th className="text-uppercase  text-xxs font-weight-bolder opacity-7">
                  Item Description
                </th>

                <th className="text-uppercase  text-xxs font-weight-bolder opacity-7 ps-2">
                  Quantity
                </th>
                {/* <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Status
                      </th> */}
                <th className="text-center text-uppercase  text-xxs font-weight-bolder opacity-7">
                  Price
                </th>
                <th className="text-uppercase  text-xxs font-weight-bolder opacity-7 ps-2">
                  After Discount
                </th>
                <th className="text-uppercase  text-xxs font-weight-bolder opacity-7 ps-2">
                  Total
                </th>
                <th className=" opacity-7"></th>
              </tr>
            </thead>
            <tbody>

              {/* ------------------------------------------------------------ */}
              {values ?
                values.map((e) => {
                  return (<tr key={e.id}>
                    <td>
                      <div className="d-flex px-2 py-1">
                        <div>
                          <img
                            // src="https://img.agriexpo.online/fr/images_ag/photo-m2/172134-10673865.webp"
                            src={process.env.PUBLIC_URL + "/image/" + e.image}
                            className="avatar avatar-sm me-3"
                          />
                        </div>

                        <div className="d-flex flex-column justify-content-center">
                          <h6 className="mb-0 text-sm">{e.title}

                          </h6>
                          <p className="text-xs  mb-0">
                            {e.categoryName}
                          </p>
                        </div>

                      </div>
                    </td>



                    <td>
                      {/* <p className="text-xs font-weight-bold mb-0">Manager</p> */}
                      <p className="text-xs  mb-0">{e.productQuantity}</p>
                    </td>
                    <td className="align-middle text-center">
                      <span className=" text-xs font-weight-bold">
                        ${e.price}{prix}
                      </span>
                    </td>
                    <td className="align-middle text-center">
                      <span className=" text-xs font-weight-bold">
                        $ 2100 {after}
                      </span>
                    </td>
                    <td className="align-middle text-center">
                      <span className=" text-xs font-weight-bold">
                        {(e.productQuantity * e.price) * (1 + e.total / 100)}TND



                      </span>
                    </td>
                    <td className="align-middle">



                      <div className="row">
                        <div className="col">
                          <Link to={"/view-product"}>
                            <VisibilityIcon
                              style={{
                                fontSize: "20px",
                                marginRight: "0.7rem",
                              }}
                            />
                          </Link>
                        </div>
                        <div className="col">
                          <IndeterminateCheckBoxIcon style={{ fontSize: "20px", cursor: "pointer" }}
                            onClick={() => decrement(e.id)}


                          />
                        </div>
                        <div className="col-0">{e.total}%</div>
                        <div className="col">
                          <AddBoxIcon style={{ fontSize: "20px", cursor: "pointer" }}

                            onClick={() => increment(e.id)}
                          />
                        </div>

                      </div>

                    </td>
                  </tr>)
                }) : null}

            </tbody>
          </table>
        </div>
      </div>


      {/* --------------------------------------------------- */}


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

                    <td>Total</td>
                    <td>Discount %</td>
                    <td>After Discount</td>

                  </tr>
                </thead>
                <tbody>
                  {values ?
                    values.map((e) => {
                      return (<tr key={e.id}>
                        <td>
                          <div className="media">
                            <img
                              className="mr-3 img-fluid"
                              src={process.env.PUBLIC_URL + "/image/" + e.image}
                              alt="Product 01"
                            />
                            <div className="media-body">
                              <p className="mt-0 title">{e.title}</p>
                              {e.CategoryName}

                            </div>
                          </div>
                        </td>
                        {/* <td>{factureHolder.id[0]}</td> */}
                        <td>{e.price}</td>
                        <td>{e.productQuantity}</td>
                        <td>{(e.productQuantity * e.price)}</td>
                        <td>{e.total}%</td>
                        <td>{(e.productQuantity * e.price) * (1 + e.total / 100)} TND</td>
                      </tr>)
                    }) : null}



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
                      <td>Total:</td>
                      <td>
                        {values.reduce((a, b) => {
                          return a + b.price * b.productQuantity;
                        }, 0)}{" "} TND
                      </td>
                    </tr>
                    <tr>
                      <td>Discount:</td>
                      <td>
                        {values.reduce((a, b) => {
                          return a + b.total;
                        }, 0)}{" "}
                        %
                      </td>
                    </tr>
                    <tfoot>
                      <tr>
                        <td>Total:</td>
                        <td>

                          {values.reduce((a, b ) => {
                            return a + b.price * b.productQuantity * (1 + total / 100);
                          }, 0)}{" "}

{/* {(e.productQuantity * e.price) * (1 + e.total / 100)} */}

                        </td>
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

      {/* --------------------------------------------------- */}

    </div>
  );
};

export default Discount;
