import React, { useEffect } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddBoxIcon from "@material-ui/icons/AddBox";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import { Link } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { getOrders } from "../../../store/action/Orders";
import { useDispatch, useSelector } from "react-redux";
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import * as actions from '../../../store/action/index';
const { confirm } = Modal;

const OrderList = () => {


  const dispatch = useDispatch();
  const order = useSelector(state => state.rootReducer.order);
  useEffect(() => {
    dispatch(getOrders())
    console.log("order", order); 
  }, [])






   // -------------Delet with refresh --------------------
//    useEffect(() => {
//     console.log("cat07", listCategories);
// }, [listCategories]);


// -------------Delet withot refresh --------------------
// useEffect(() => {
//     dispatch(actions.getOrders());;
// },[]);

// const classes = useStyles();
// const [value, setValue] = React.useState('category');
// const handleChange = (event) => {
//     setValue(event.target.value);
// };




const showDeleteConfirm = (id) => {
    confirm({
        title: 'Êtes-vous sûr de vouloir supprimer ce Category?',
        icon: <ExclamationCircleOutlined />,
        content: 'Attention, le Category ne peut pas être retourné ',
        confirmLoading: true,
        okText: 'Oui',
        okType: 'danger',
        cancelText: 'Non',
        onOk() {
            console.log('OK');
            dispatch(actions.deleteOrder(id))
        },
        onCancel() {
            console.log('Cancel');
        },
    });
};





  return (
    <div>
      <div className="main-panel">
        <div className="row" style={{ margin: "7% 1% 1%" }}>
          <div className="col-12">
            <div className="card mb-4">
              <div className=" row card-header pb-0">
                <div className="col-2">
                  <h6>All Orders</h6>
                </div>
                <div className="col-10">
                  {/* <div
                    className="sarchbar-add-btn"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    <form
                      className="navbar-left navbar-form nav-search mr-md-3"
                      action=""
                    >
                      <div className="input-group">
                        <input
                          type="text"
                          placeholder="Search ..."
                          className="form-control"
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">
                            <i className="la la-search search-icon"></i>
                          </span>
                        </div>
                      </div>
                    </form>

                    <SystemUpdateAltIcon
                      style={{ fontSize: "20px", marginTop: "0.4rem" }}
                    />
                  </div> */}
                </div>
              </div>
              <div className="card-body px-0 pt-0 pb-2">
                <div className="table-responsive p-0">
                  <table className="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <th
                          className="text-uppercase  text-xxs font-weight-bolder opacity-7"
                          style={{ width: "8rem" }}
                        >
                          Order Number
                        </th>
                        <th className="text-uppercase  text-xxs font-weight-bolder opacity-7">
                          Items
                        </th>
                        <th className="text-uppercase  text-xxs font-weight-bolder opacity-7">
                          Customer
                        </th>
                        <th className="text-uppercase  text-xxs font-weight-bolder opacity-7">
                          Date
                        </th>
                        <th className="text-uppercase  text-xxs font-weight-bolder opacity-7">
                          Total
                        </th>
                        <th className="text-uppercase  text-xxs font-weight-bolder opacity-7 ps-2">
                          Status
                        </th>

                        {/* <th className="text-center text-uppercase  text-xxs font-weight-bolder opacity-7">
                        Status
                      </th> */}

                        <th className=" opacity-7"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* ------------------------------------------------------- */}
                      {order ? order.map(v => (
                        <tr>
                          <td>
                            {/* <p className="text-xs font-weight-bold mb-0">Manager</p> */}
                            <p className="text-xs  mb-0">
                              #{v.id}
                            </p>
                          </td>
                          <td>
                            {/* <p className="text-xs font-weight-bold mb-0">Manager</p> */}
                             {v.products?v.products.length:null} 
                            <p className="text-xs  mb-0">
                            </p>
                          </td>

                          <td>
                            {/* <p className="text-xs font-weight-bold mb-0">Manager</p> */}
                            <p className="text-xs  mb-0">
                              {v.clientName} {v.clientLastName}
                            </p>
                          </td>
                          <td className="align-middle ">
                           {/*<span className=" text-xs font-weight-bold">
                              {v.createdAt.split("T")[0]}
                      </span>*/}
                          </td>
                          <td className="align-middle ">
                            <span className=" text-xs font-weight-bold">
                              {v.totalPrice} TND
                            </span>
                          </td>
                          <td className="align-middle  text-sm">
                            {v.totalPrice < 500 ?
                              <span className="badge badge-sm bg-gradient-Available">
                                Answered
                              </span>
                              :
                              <span className="badge badge-sm bg-gradient-Limited-Stock">
                                Processing
                              </span>
                            }
                          </td>
                          <td className="align-middle ">
                            
                            <Link to={`/view-order`}>
                             
                               <VisibilityIcon
                                style={{
                                  fontSize: "20px",
                                  marginRight: "0.7rem",
                                }}
                              />
                            </Link>
                            <Link to={`/edit-order/${v.id}`} onClick={() => localStorage.setItem('prodModification', JSON.stringify(v))}>
                            <EditIcon
                                style={{
                                  fontSize: "20px",
                                  marginRight: "0.7rem",
                                }}
                              />
                            </Link>
                            <DeleteIcon 
                              style={{ fontSize: "20px", cursor: "pointer" }}

                            />
                          </td>
                        </tr>
                      )) : null}

                      {/* ------------------------------------------------------------ */}


                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
