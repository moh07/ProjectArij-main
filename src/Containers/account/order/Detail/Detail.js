import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import "./Detail.css";
import { getOrders, getOrdersuser } from "../../../../store/action/Orders";
import { useDispatch, useSelector } from "react-redux";

const Detail = () => {
  const dispatch = useDispatch();
  const [list, setLIST] = useState([]);

  const order = useSelector(state => state.rootReducer.order);
  useEffect(() => {
    dispatch(getOrdersuser())
  }, [])

  return (
    <div className="dashboard-right card card-body account-right">
      <div className="row">
        <div className="col-md-12" style={{ marginBottom: "2rem" }}>
          <div className="main-title-tab">
            <h4>
              <i className="uil uil-box" />
              My Orders
            </h4>
          </div>
        </div>
        <div className="col-lg-12 col-md-12">
          <div className="pdpt-bg">
            <div className="pdpt-title">
              {/* <h6>Delivery Timing : {list.deliverydate?<Moment format='MMMM Do YYYY'>{list.deliverydate}</Moment>:''}</h6> */}
              {/* <h6>Delivery Timing : 455454</h6> */}
            </div>
            <div className="order-body10">
              <div className="table-responsive">
                <table className="table ucp-table table-hover">
                  <thead>
                    <tr>
                      <th style={{ width: 130 }}>#</th>
                      <th>ITEMS</th>
                      <th>DATE</th>
                      <th style={{ width: 150 }} className="text-center">
                        TOTAL
                      </th>
                      <th style={{ width: 150 }} className="text-center">

                      </th>
                      {/* <th style={{ width: 150 }} className="text-center">
                        Qty
                      </th>
                      <th style={{ width: 100 }} className="text-center">
                        Total
                      </th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {order?
                    order.map((e) => (
                      <tr>
                      <td>{e.id}</td>
                      <td className="d-flex px-2 py-1">2</td>
                      <td>04/05/2021
                      </td>
                      <td>1700 TND</td>
                      <td>

                        <Link to={'/items'}>
                          <VisibilityIcon
                            style={{
                              fontSize: "20px",
                              marginRight: "0.7rem",
                            }}
                          />
                        </Link>
                      </td>
                    </tr>
                    )):""

                    }
                  </tbody>
                </table>
              </div>

              <div className="total-dt">
                <div className="total-checkout-group">
                  {/* <div className="cart-total-dil">
                    <h4>Sub Total</h4>
                    <span>&#8377;{list ? list.grandtotal : ''}</span>
                    <span>0 TND</span>
                  </div>
                  <div className="cart-total-dil pt-3">
                    <h4>Delivery Charges</h4>
                    <span>Free</span>
                  </div> */}
                </div>

              </div>
              {/* <div className="track-order">
                <h4>Track Order</h4>
                <div className="bs-wizard" style={{ borderBottom: 0 }}>
                  
                  <div>
                    complete
                    <div className="text-center bs-wizard-stepnum">Packed</div>
                    <div className="progress">
                      <div className="progress-bar" />
                    </div>
                    <a href="#" className="bs-wizard-dot" />
                  </div>
                  <div>
                    complete
                    <div className="text-center bs-wizard-stepnum">
                      On the way
                    </div>
                    <div className="progress">
                      <div className="progress-bar" />
                    </div>
                    <a href="#" className="bs-wizard-dot" />
                  </div>
                  <div>
                    active
                    <div className="text-center bs-wizard-stepnum">
                      Delivered
                    </div>
                    <div className="progress">
                      <div className="progress-bar" />
                    </div>
                    <a href="#" className="bs-wizard-dot" />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
