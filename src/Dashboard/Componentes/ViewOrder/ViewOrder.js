import React from "react";
import Discount from "../Discount/Discount";

import Facture from "../Facture/Facture";

const ViewOrder = () => {
  let ProdHandler = JSON.parse(localStorage.getItem('prodModification'))
 
  return (
    <div>
      <div className="main-panel">
        <div className="row" style={{ margin: "7% 1% 1%" }}> 
          <div className="col-12">
            <div className="card mb-4">
              <div className=" row card-header pb-0">
                <div classNameName="col-4">
                  <h6>Order Info</h6>
                </div>
              </div>
              <div className="card-body px-0 pt-0 pb-2">
                {/* ---------------------------------------------------------------------- */}


                <div >
                
                  <Discount   />
                 
                  
                                    
                </div>
                
                

                {/* ---------------------------------------------------------------------- */}
              </div>
              
            </div>
            <div>
                {/* <Facture/> */}
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOrder;
