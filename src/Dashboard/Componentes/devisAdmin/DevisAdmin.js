import React, { useEffect, useState } from "react";
// import jwtDecode from 'jwt-decode' ;
import axios from "axios";
import { Table, Divider, Button, Space } from "antd";
import * as actions from "../../../store/action/index";
import { useDispatch, useSelector } from "react-redux";
import {Progress} from 'antd';
import {
  DownloadOutlined,
  DeliveredProcedureOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import DevisModal from "./DevisModal";
import { useModalState } from "../../../hooks/useModalState";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { ExclamationCircleOutlined } from "@ant-design/icons";
import VisibilityIcon from "@material-ui/icons/Visibility";

const DevisAdmin = () => {
  const [record, setRecord] = useState({});
  const { visible, close, open } = useModalState(false);
  const dispatch = useDispatch();
  const devisAdmin = useSelector((state) => state.rootReducer.devisAdmin);

  useEffect(() => {
    dispatch(actions.getDevisAdmin());
  }, []);

  /* const showDeleteConfirm = (id) => {
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
            dispatch(actions.DeleteDevisAdmin(id))
        },
        onCancel() {
            console.log('Cancel');
        },
    });
};
*/

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
                          Customer
                        </th>
                        <th className="text-uppercase  text-xxs font-weight-bolder opacity-7">
                          Date
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
                      {devisAdmin
                        ? devisAdmin.map((v) => (
                            <tr>
                              <td>
                                {/* <p className="text-xs font-weight-bold mb-0">Manager</p> */}
                                <p className="text-xs  mb-0">#{v.id}</p>
                              </td>

                              <td>
                                {/* <p className="text-xs font-weight-bold mb-0">Manager</p> */}
                                <p className="text-xs  mb-0">
                                  {v.user.lastname} {v.user.firstname}
                                </p>
                              </td>
                              <td className="align-middle ">
                                <span className=" text-xs font-weight-bold">
                              {v.createdAt.split("T")[0]}
                      </span>
                              </td>
                             {/* <td className="align-middle ">
                                <span className=" text-xs font-weight-bold">
                                  {v.totalPrice} TND
                                </span>
                    </td>*/}
                              <td className="align-middle  text-sm">
                                {!v.etat ? (
                    <div>
                        <Progress type="circle"
                            percent={100}
                            width={40}
                            status="exception"
                            format={
                                () => 'NOT YET'
                            }/>
                    </div>
                ) : <div>
                        <Progress type="circle"
                            percent={100}
                            width={40}
                            format={
                                () => 'Done'
                            }/>
                    </div>
                   }
                              </td>
                              <td className="align-middle ">
                               
                                <Button
                                  icon={
                                    <DeliveredProcedureOutlined
                                      style={{
                                        fontSize: "20px",
                                      }}
                                    />
                                  }
                                  onClick={() => {
                                    setRecord(v);
                                    open();
                                  }}
                                />
                               
                              </td>
                            </tr>
                          ))
                        : null}

                      {/* ------------------------------------------------------------ */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DevisModal visible={visible} onCancel={close} record={record} />

      {/* {visible===true ? (
        <DevisModal visible={visible} onCancel={close} record={record} />
      ) : (
        ""
      )} */}
    </div>
  );

  /*
  const [record, setRecord] = useState({});
  const { visible, close, open } = useModalState(false);

  const columns = [
    {
      title: "devisId",
      dataIndex: "id",
      key: "id",
      render: (value, record) => {
        return <div>{value}</div>;
      },
    },
    {
      title: "user",
      dataIndex: "userId",
      key: "userId",
      render: (value, record) => {
        return <div>{record.user?.lastname}</div>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space>
          <Button type="primary" onClick={()=>{
            setRecord(record)
            open()
          }}>Traiter</Button>
          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            onClick={() => dispatch(actions.DeleteDevisAdmin(record.id))}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const dispatch = useDispatch();

  // ------------- Get data from store in redux (redux call api and do update if data is updating) --------------------

  const devisAdmin = useSelector((state) => state.rootReducer.devisAdmin);

  // ------------- refresh when we have update in list --------------------

  useEffect(() => {
    dispatch(actions.getDevisAdmin());
  }, []);

  useEffect(() => {
    console.log("mpm", devisAdmin);
  });

  return (
    <div>
      <Table columns={columns} dataSource={devisAdmin} />
      <DevisModal visible={visible} onCancel={close} record={record} />
    </div>
  );
  */
};

export default DevisAdmin;
