import React, { Component } from "react";
import { NotificationManager } from "react-notifications";
import "./Overview.css";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Overview = () => {
  const classes = useStyles();
  return (
    <div className="dashboard-right card card-body account-right ">
      <div className="row">
        <div className="col-md-12">
          <div className="main-title-tab">
            <h4>
              {/* <PersonOutlineIcon/> */}
              Overview
            </h4>
          </div>
        </div>

        <div className="col-md-12 myProjects">
          <div className="breadcrumb">
            <h2>My Projects:</h2>
          </div>
        </div>

        <div className="col-lg-12 col-md-12">
          <div className="pdpt-bg ">
            <Link to={"/creatproject"}>
              <div className="col-lg-3 Addnewproject">
                <div className="user-dt">
                  <h1 className="Addbtn">+</h1>
                </div>
              </div>
            </Link>
            <Link to={"/editproject"}>
              <div className="col-lg-3 cardprpject">
                <div className="user-dt">
                  <div className="user-img">
                    <img
                      src="https://chitwashop.com/img/avatar/img-5.jpg"
                      alt
                    />
                  </div>
                  <h4>Name of project</h4>
                  <p>
                    lorem ipsum dolor sit amet, consectet lorem ipsum dolor{" "}
                  </p>
                  <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
