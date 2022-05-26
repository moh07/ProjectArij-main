import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "../../store/action/index";
import CircularProgress from "@material-ui/core/CircularProgress";
import $ from "jquery";
import "./Login.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Modal, ModalBody } from "reactstrap";
import { userInfo } from "os";
import instance from "../../axios";

const Login = (props) => {
  const dispatch = useDispatch();
  const [forgetPassword, setForgetPassword] = useState(false);
  const [form, setForm] = useState({});

  const token = useSelector((state) => state.rootReducer.token);
  const url = useSelector((state) => state.rootReducer.rediractor);
  const authError = useSelector((state) => state.rootReducer.AuthError);
  const loading = useSelector((state) => state.rootReducer.AuthLoading);
  const errorMessage = useSelector((state) => state.rootReducer.errorMssage);
  const history = useHistory();
  let redirectUrl = null;

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const menu = useSelector((state) => state.rootReducer.menu);

  const loginHandler = async (e) => {
    e.preventDefault();
    instance.post("http://localhost:4000/person/login", form).then((res) => {
      const { jwt } = res.data;
      //const decode = jwt_decode(jwt)
      localStorage.setItem("user", JSON.stringify(res.data.payload));
      const user = JSON.parse(localStorage.getItem("user"));

      if (!JSON.parse(localStorage.getItem("olduser")) && user.role!=="admin"){
        localStorage.setItem("olduser", JSON.stringify(res.data.payload));
      }
      console.log("res.data.payload", res.data.payload);
      props.onClose();
      if(window.location.href!="http://localhost:4001/" && window.location.href!="http://localhost:4001")
      {history.push("/dashboard")
      window.location.reload();}
      else
       window.location.reload();

      // if (res.data.payload.role === "admin") history.go("/dashboard");
      // else if (res.data.payload.role === "user") history.go("/dashboard");
    }).catch((e) => {
      console.log(e);
  });
    //.catch(err=>alert(err.response.data.message))
  };

  const toggleModal = () => {
    $("#logInModal").modal("toggle");
    $("#registerModal").modal("toggle");
  };
  if (token) {
    console.log("url =>", url, "token => ", token);
    $("#logInModal").modal("hide");
    if (url === "/checkout") redirectUrl = <Redirect to={url} />;
  }

  console.log("auth error => ", authError);

  return (
    <Modal isOpen={props.isOpen} toggle={props.onClose}>
      <ModalBody>
        <div>
          <h1 className="logInModal-title">Login</h1>
          {errorMessage ? (
            <p className="errorMessage"> {errorMessage} </p>
          ) : null}
          <form className="logInModal-form" onSubmit={loginHandler}>
            <div className="form-group">
              <label for="exampleInputEmail1" className="logInModal-form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className={"form-control logInModal-form-input"}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={onChange}
                style={{ border: authError ? "red 2px solid" : null }}
                x
              />
            </div>
            {!forgetPassword ? (
              <div className="form-group">
                <label
                  for="exampleInputPassword"
                  className="logInModal-form-label"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={onChange}
                  className={"form-control logInModal-form-input "}
                  id="exampleInputPassword"
                  style={{ border: authError ? "red 2px solid" : null }}
                />
              </div>
            ) : null}

            <a
              href="#"
              onClick={() => setForgetPassword(!forgetPassword)}
              className="logInModal-form-link"
            >
              {forgetPassword ? (
                <span> Go Back </span>
              ) : (
                `Forgot your password?`
              )}
            </a>
            <button type="submit" className="btn logInModal-form-submit">
              {loading ? (
                <CircularProgress size={15} color="white" />
              ) : !forgetPassword ? (
                "Login"
              ) : (
                "send"
              )}
            </button>
            <p className="logInModal-form-text">
              if you don't have a account{" "}
              <a
                href="#"
                className="logInModal-form-text-link"
                onClick={toggleModal}
              >
                Register
              </a>
            </p>
          </form>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default Login;
