import React, { useState, useEffect } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddBoxIcon from "@material-ui/icons/AddBox";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import { Link } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import {useDispatch, useSelector} from "react-redux";
import { handle_Product_modification } from "../../../store/action/products"
import {EditOutlined, DeleteOutlined, ExclamationCircleOutlined} from '@ant-design/icons';
import {Modal} from 'antd';
import * as actions from '../../../store/action/index';
const {confirm} = Modal;

const ProductList = (props) => {
  const dispatch = useDispatch();

  const [item, setItem] = useState("");


  // -------------Delet with refresh --------------------

  useEffect(() => {
    dispatch(actions.getProducts());

  },[]);



  const products = useSelector(state => state.rootReducer.products);
  useEffect(() => {
    console.log("mpm", products);

  })




  const showDeleteConfirm = (id) => {
    confirm({
        title: 'Êtes-vous sûr de vouloir supprimer ce Product?',
        icon: <ExclamationCircleOutlined/>,
        content: 'Attention, le Product ne peut pas être retourné ',
        confirmLoading: true,
        okText: 'Oui',
        okType: 'danger',
        cancelText: 'Non',
        onOk() {
            console.log('OK');
          //  dispatch(actions.deleteProduct(id))
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
                  <h6>Products table</h6>
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
                          value={item}
                          onChange={e => setItem(e.target.value)}

                        />
                        <div className="input-group-append">
                          <span className="input-group-text">
                            <i className="la la-search search-icon"></i>
                          </span>
                        </div>
                      </div>
                    </form>
                    <Link to={"/new-product"}>
                      <AddBoxIcon
                        style={{
                          fontSize: "20px",
                          marginTop: "0.4rem",
                          marginRight: "0.5rem",
                        }}
                      />
                    </Link>
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
                        <th className="text-uppercase  text-xxs font-weight-bolder opacity-7">
                          photo
                        </th>
                        <th className="text-uppercase  text-xxs font-weight-bolder opacity-7">
                          Name
                        </th>
                       
                        <th className="text-uppercase  text-xxs font-weight-bolder opacity-7 ps-2">
                          Stock
                        </th>
                        {/* <th className="text-center text-uppercase  text-xxs font-weight-bolder opacity-7">
                        Status
                      </th> */}
                        <th className="text-center text-uppercase  text-xxs font-weight-bolder opacity-7">
                          Price
                        </th>
                        <th className=" opacity-7"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map(v => (

                        <tr item={item}>
                          <td>
                            <div className="d-flex px-2 py-1">
                              <div>
                                <img
        src={"http://localhost:4000/products/image"+v.imagePrincipale}
        className="avatar avatar-sm me-3"
                                />
                              </div>
                              </div>
                              
                              </td>
                              <td>
                          
                              <div className="d-flex flex-column justify-content-center" >
                                <h6 className="mb-0 text-sm" style={{ maxWidth: "55rem" }}>{v.produit}</h6>
                                <p className="text-xs  mb-0">
                                  {v.categorie}
                                </p>
                             
                            </div>
                          </td>

                          <td className="align-middle  text-sm">
                            {v.quantity === 0 ?

                              <span className="badge badge-sm bg-gradient-Out-of-Stock">
                                Limited Stock

                              </span>

                              :
                              <span className="badge badge-sm bg-gradient-Available">
                                Available
                              </span>
                            }
                          </td>

                         
                          <td className="align-middle text-center">
                            <span className=" text-xs font-weight-bold">
                               {v.price} DT
                            </span> 
                          </td>
                          <td className="align-middle">
                            <Link to={"/view-product"} onClick={() => localStorage.setItem('prodModification', JSON.stringify(v))}>
                              <VisibilityIcon
                                style={{
                                  fontSize: "20px",
                                  marginRight: "0.7rem",
                                }}
                              />
                            </Link>
                            <Link to={"/edit-product"} onClick={() => localStorage.setItem('prodModification', JSON.stringify(v))}>
                              <EditIcon
                                style={{
                                  fontSize: "20px",
                                  marginRight: "0.7rem",
                                }}
                              />
                            </Link>
                            <DeleteIcon style={{ fontSize: "20px" , cursor: "pointer" }}
                            
                            onClick={() => showDeleteConfirm(v.id)}
                            /> 
                          </td>
                        </tr>
                      ))}



                      {/* ------------------------------------------------------- */}

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

export default ProductList;
