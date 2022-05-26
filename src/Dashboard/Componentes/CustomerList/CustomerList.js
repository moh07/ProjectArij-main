import React, { useEffect } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddBoxIcon from "@material-ui/icons/AddBox";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import { Link } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers } from "../../../store/action/Customers";
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import * as actions from '../../../store/action/index';
const { confirm } = Modal;



const CustomerList = () => {
  const dispatch = useDispatch();
  const customer = useSelector(state => state.rootReducer.customer);

  // ----------------deleet without refresh-------------------------

  // useEffect(() => {
  //   dispatch(getCustomers())
  // })

  // ----------------deleet with refre*-------------------------
  useEffect(() => {
    dispatch(getCustomers())
  }, [])





  const showDeleteConfirm = (id) => {
    confirm({
      title: 'Êtes-vous sûr de vouloir supprimer ce Product?',
      icon: <ExclamationCircleOutlined />,
      content: 'Attention, le Product ne peut pas être retourné ',
      confirmLoading: true,
      okText: 'Oui',
      okType: 'danger',
      cancelText: 'Non',
      onOk() {
        console.log('OK');
        dispatch(actions.deleteCustomer(id))
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };


  return (
    <div className="main-panel">
      <div className="row" style={{ margin: "7% 1% 1%" }}>
        <div className="col-12">
          <div className="card mb-4">
            <div className=" row card-header pb-0">
              <div className="col-2">
                <h6>Customers table</h6>
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
                  <Link to={"/"}>
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
                        Name
                      </th>
                      <th className="text-uppercase  text-xxs font-weight-bolder opacity-7 ps-2">
                     Email
                      </th>
                      <th className="text-uppercase  text-xxs font-weight-bolder opacity-7 ps-2">
                        Address
                      </th> 
                      <th className="text-uppercase  text-xxs font-weight-bolder opacity-7 ps-2">
                        CreatedAt
                      </th>
                      
                      {/* <th className="text-center text-uppercase  text-xxs font-weight-bolder opacity-7">
                        Status
                      </th> */}
                      <th className="text-center text-uppercase  text-xxs font-weight-bolder opacity-7">
                        Phone
                      </th>
                     
               
                    </tr>
                  </thead>
                  <tbody>
                    {customer.map(v => (
                      <tr>

                        <td>
                          <div className="d-flex px-2 py-1">
                           

                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="mb-0 text-sm">{v.firstname}{" "}{v.lastname}</h6>
                             
                            </div>

                          </div>
                        </td>


                        {/* <td className="align-middle text-center text-sm">
                        <span className="badge badge-sm bg-gradient-success">
                          Online
                        </span>
                      </td> */}
                      <td>
                      <p className="text-xs  mb-0">
                                {v.email}
                              </p>
                      </td>
                        <td>
                          <p className="text-xs  mb-0">
                            {v.address}
                          </p>
                         
                        </td>
                        <td>
                          <p className="text-xs  mb-0">
                            {v.createdAt.split("T")[0]}
                          </p>
                         
                        </td>
                        
                       
                        <td className="align-middle text-center">
                          <span className=" text-xs font-weight-bold">
                            {v.phone}
                          </span>
                        </td>
                       { /*<td className="align-middle text-center">
                          <span className=" text-xs font-weight-bold">
                            {v.isActive === false ?

                              <span className="badge badge-sm bg-gradient-Out-of-Stock" style={{ fontSize: "11px" }}>
                                False

                              </span>

                              :
                              <span className="badge badge-sm bg-gradient-Available" style={{ fontSize: "11px" }}>
                                True
                              </span>
                            }
                          </span>
                          </td> */}
                        <td className="align-middle">
                         
                          {/* <Link to={"/edit-customert"}>
                            <EditIcon
                              style={{ fontSize: "20px", marginRight: "0.7rem" }}
                            />
                          </Link> */}
                          <DeleteIcon 
                            style={{ fontSize: "20px", cursor: "pointer" }}

                            onClick={() => showDeleteConfirm(v.id)}
                          />
                        </td>
                      </tr>
                    ))}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
