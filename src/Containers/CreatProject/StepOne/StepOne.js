import React from "react";
import "./StepOne.css";

import BoardImage2nd from "../../../Assets/Images/BoardImage2nd.svg";
const StepOne = () => {
  return (
    <div className="bodysteps">
      <div className="row  iputesstepone ">
        <div className="col-12 ">
          <div className="">
            <label className="control-label labeltxt">
              Choose category of project
              <span className="required">*</span>
            </label>
            <div className="catlist lml">
              <div className="steponecat item-animation">
                <img src={BoardImage2nd} className="steponeImageCat" />
                <div className="bgnamecat">
                  <h5 className="steponeNameCat">men's clothing</h5>
                </div>
              </div>
              {/* --------------------------------------------- */}

              <div className="steponecat item-animation">
                <img src={BoardImage2nd} className="steponeImageCat" />
                <div className="bgnamecat">
                  <h5 className="steponeNameCat">men's clothing</h5>
                </div>
              </div>

              {/* --------------------------------------------- */}
              <div className="steponecat item-animation">
                <img src={BoardImage2nd} className="steponeImageCat" />
                <div className="bgnamecat">
                  <h5 className="steponeNameCat">men's clothing</h5>
                </div>
              </div>
              {/* --------------------------------------------- */}
              <div className="steponecat item-animation">
                <img src={BoardImage2nd} className="steponeImageCat" />
                <div className="bgnamecat">
                  <h5 className="steponeNameCat">men's clothing</h5>
                </div>
              </div>
              {/* --------------------------------------------- */}
              <div className="steponecat item-animation">
                <img src={BoardImage2nd} className="steponeImageCat" />
                <div className="bgnamecat">
                  <h5 className="steponeNameCat">men's clothing</h5>
                </div>
              </div>
              {/* --------------------------------------------- */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
