import React ,{ useState, useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import * as actions from '../../../store/action/index';

const ViewCustomer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getCustomerById());

  },[]);



  const customer = useSelector(state => state.rootReducer.customerById);
  const [item, setItem] = useState("");
    return (
      <div>
      <div className="main-panel">
        <div className="row" style={{ margin: "7% 1% 1%" }}>
          <div className="col-12">
            <div className="card mb-4">
              <div className=" row card-header pb-0">
                <div className="col-2">
                  <h6>View Customer</h6>
                </div>
                <div className="col-10">
                
                </div>
              </div>
              <div className="card-body px-0 pt-0 pb-2">
                <div className="table-responsive p-0">
                  <table className="table align-items-center mb-0">
                    <thead>
                      <tr>
                        
                       
                       
                        <th className="text-uppercase  text-xxs font-weight-bolder opacity-7 ps-2">
                          Name
                        </th>
                        {/* <th className="text-center text-uppercase  text-xxs font-weight-bolder opacity-7">
                        Status
                      </th> */}
                        <th className="text-center text-uppercase  text-xxs font-weight-bolder opacity-7">
                          email
                        </th>
                        <th className="text-center text-uppercase  text-xxs font-weight-bolder opacity-7">
                          phone
                        </th>
                        <th className="text-center text-uppercase  text-xxs font-weight-bolder opacity-7">
                          address
                        </th>
                        <th className="text-center text-uppercase  text-xxs font-weight-bolder opacity-7">
                          createdAt
                        </th>
                       
                      </tr>
                    </thead>
                    <tbody>
                      {customer.map(v => (

                        <tr item={item}>
                         
                              <td>
                          
                              <div className="d-flex flex-column justify-content-center" >
                                <h6 className="mb-0 text-sm" style={{ maxWidth: "55rem" }}>{v.firstname} {v.lastname}</h6>
                                
                             
                            </div>
                          </td>
                           <td>
                          
                              <div className="d-flex flex-column justify-content-center" >
                                <h6 className="mb-0 text-sm" style={{ maxWidth: "55rem" }}>{v.email} </h6>

                            </div>
                          </td>

                          <td>
                          
                          <div className="d-flex flex-column justify-content-center" >
                            <h6 className="mb-0 text-sm" style={{ maxWidth: "55rem" }}>{v.phone}</h6>
                            
                         
                        </div>
                      </td>
                      <td>
                          
                          <div className="d-flex flex-column justify-content-center" >
                            <h6 className="mb-0 text-sm" style={{ maxWidth: "55rem" }}>{v.address}</h6>
                            
                         
                        </div>
                      </td>

                      <td>
                          
                          <div className="d-flex flex-column justify-content-center" >
                            <h6 className="mb-0 text-sm" style={{ maxWidth: "55rem" }}>{v.createdAt}</h6>
                            
                         
                        </div>
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
}

export default ViewCustomer
