import React from "react";

const StepTow = () => {
  return (
    <div className="bodysteps">
      <form>
        <div className="row  iputesstepone">
          <div className="col-sm-6">
            <div className="form-group">
              <label className="control-label labeltxt">
                Name of your project<span className="required">*</span>
              </label>
              <input
                type="text"
                className="form-control steponinputes"
                placeholder="Name of your project"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label className="control-label labeltxt">
                Matricule Fiscal <span className="required">*</span>
              </label>
              <input
                type="number"
                className="form-control steponinputes "
                placeholder="1656645454"
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label className="control-label labeltxt">More details</label>
              <textarea
                className="form-control txtarea"
                id="exampleFormControlTextarea1"
              ></textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
    
  );
};

export default StepTow;
