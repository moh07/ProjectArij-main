import React from "react";

const ViewProduct = () => {
  let ProdHandler = JSON.parse(localStorage.getItem('prodModification'))
  return (
    <div >
      
      <div className="main-panel">
      <div className="row" style={{ margin: "7% 1% 1%" }}>
        <div className="col-12">
          <div className="card mb-4">
            <div className=" row card-header pb-0">
              <div className="col-2">
                <h6>View Product</h6>
              </div>
              <div className="col-10">
                <div
                  className="sarchbar-add-btn"
                  style={{ marginBottom: "0.5rem" }}
                >
                  
                </div>
              </div>
            </div>
            <div className="card-body px-0 pt-0 pb-2">
              {/* --------------- ici ----------------- */}
              <div className="row">
                <div className="col">
                <img 
                src={process.env.PUBLIC_URL+"/image/"+ProdHandler.image}
                
                
                />
                </div>
                <div className="col">
                <h1>{ProdHandler.title}</h1>
                <h2>{ProdHandler.price} TND</h2>
                <h3>{ProdHandler.description}</h3>
                </div>

              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ViewProduct;
