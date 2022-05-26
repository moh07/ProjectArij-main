import React from "react";
import BoardImage2nd from "../../../Assets/Images/BoardImage2nd.svg";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const EditProject = () => {
  const classes = useStyles();
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
              <div className="steponecat">
                <img src={BoardImage2nd} className="steponeImageCat" />
                <div className="bgnamecat">
                  <h5 className="steponeNameCat">men's clothing</h5>
                </div>
              </div>
              {/* --------------------------------------------- */}
              <div className="steponecat">
                <img src={BoardImage2nd} className="steponeImageCat" />
                <div className="bgnamecat">
                  <h5 className="steponeNameCat">men's clothing</h5>
                </div>
              </div>
              {/* --------------------------------------------- */}
              <div className="steponecat">
                <img src={BoardImage2nd} className="steponeImageCat" />
                <div className="bgnamecat">
                  <h5 className="steponeNameCat">men's clothing</h5>
                </div>
              </div>
              {/* --------------------------------------------- */}
              <div className="steponecat">
                <img src={BoardImage2nd} className="steponeImageCat" />
                <div className="bgnamecat">
                  <h5 className="steponeNameCat">men's clothing</h5>
                </div>
              </div>
              {/* --------------------------------------------- */}
              <div className="steponecat">
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
            {/* ------- */}

            <div className="form-group">
              <label className="control-label labeltxt">More details</label>
              <textarea
                className="form-control txtarea"
                id="exampleFormControlTextarea1"
              ></textarea>
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
            {/* --------------- */}
            <div className="form-group">
              <label for="inputAddress" className="labeltxt">
                Address
              </label>
              <input
                type="text"
                className="form-control "
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div className="form-group">
              <label for="inputAddress2" className="labeltxt">
                Address 2
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              <div className="form-group col-md-4">
                <label for="inputState">State</label>
                <select id="inputState" className="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="text" className="form-control" id="inputZip" />
              </div>
            </div>
          </div>
          <Button
            variant="contained"
            className={classes.button}
            startIcon={<ClearIcon />}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "#fad553" }}
            className={classes.button}
            startIcon={<SaveIcon />}
          >
            Save
          </Button>

          {/* ------------------------- */}
        </div>
      </form>
    </div>
  );
};

export default EditProject;
