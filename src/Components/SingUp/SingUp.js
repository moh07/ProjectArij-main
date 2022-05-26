import React, { useEffect, useState } from "react";
import $ from "jquery";
import google from "../../Assets/Images/google.svg";
import facebook from "../../Assets/Images/facebook.svg";
import * as actions from "../../store/action/index";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, ModalBody } from "reactstrap";

const toggleModal = () => {
  $("#logInModal").modal("toggle");
  $("#registerModal").modal("toggle");
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const SingUp = (props) => {

  const registred = useSelector((state) => state.rootReducer.register);
  const [firstname, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPasswoad, setConfirmpassword] = useState("");
  const [type, setType] = useState("");
  const [taxRegistration, setTaxRegistration] = useState("");
  const [phone, setphone] = useState("");
  const [address, setAddress] = useState("");
  const [errorPaswword, setErrorPassword] = useState(false);
  const dispatch = useDispatch();
  const [errorInputs, setErrorInputs] = useState("");
  const hundelform = async (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      firstname,
      lastname ,
      email ,
      phone ,
      address ,
      password
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost:4000/person", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
     
  
  
    if (
      firstname == "" ||
      lastname == "" ||
      email == "" ||
      password == "" ||
      confirmPasswoad == "" ||
      phone == "" ||
      address == ""
    ) {
      setErrorInputs("Please fill in all the input!");
    }
    if (password === confirmPasswoad)
    {
       dispatch(
        actions.SignUp({
          firstname,
          lastname,
          email,
          password,
          confirmPasswoad,
          type,
          taxRegistration,
          phone,
          address,
        })
      );
      console.log("okay");
  }
    else setErrorPassword(true);
    console.log({
      firstname,
      lastname,
      email,
      password,
      address,
      phone,
    });
  
  console.log("hoooy", type);
  
  };
    const classes = useStyles();
  

  return (
    <Modal isOpen={props.isOpen} toggle={props.onClose}>
      <ModalBody>
      <p className="registerModal-text">
            Already a Member ?{" "}
            <a
              href="#"
              className="registerModal-text-link"
              onClick={toggleModal}
            >
              Sign in
            </a>
          </p>
          {!registred ? (
            <div className="modal-body registerModal">
              <h1 className="registerModal-title">Register to MAFI</h1>
              <p className="registerModal-splitter">or</p>
              {errorInputs != "" ? (
                <p className="errorMessage"> {errorInputs} </p>
              ) : null}
              {errorPaswword ? (
                <span style={{ color: "red" }}>
                  Please your check your password!{" "}
                </span>
              ) : null}
              <form onSubmit={hundelform}>
                <div className="row justify-content-center">
                  <div className="col-12 ">
                    <div className="form-group">
                      <label
                        for="exampleInputEmail1"
                        className="registerModal-label margLef"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control registerModal-input margLef"
                        aria-describedby="emailHelp"
                        value={firstname}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label
                      for="exampleInputEmail1"
                      className="registerModal-label"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control registerModal-input"
                      aria-describedby="emailHelp"
                      value={lastname}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-8 col-sm-6">
                    <div className="form-group">
                      <label
                        for="exampleInputEmail1"
                        className="registerModal-label"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control registerModal-input"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-8 col-sm-6">
                    <div className="form-group">
                      <label
                        for="exampleInputPassword1"
                        className="registerModal-label"
                      >
                        phone
                      </label>
                      <input
                        type="text"
                        className="form-control registerModal-input"
                        value={phone}
                        onChange={(e) => setphone(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="col col-12">
                  <div className="form-group">
                    <label
                      for="exampleInputPassword1"
                      className="registerModal-label"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control registerModal-input registerModal-input-address margLef mx-auto"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-8 col-sm-6">
                    <div className="form-group">
                      <label
                        for="exampleInputEmail1"
                        className="registerModal-label"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control registerModal-input"
                        aria-describedby="emailHelp"
                        style={{
                          border: errorPaswword ? "red solid 1px" : null,
                        }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-8 col-sm-6">
                    <div className="form-group">
                      <label
                        for="exampleInputPassword1"
                        className="registerModal-label"
                      >
                        <span>Password Confirmation</span>
                      </label>
                      <input
                        type="password"
                        className="form-control registerModal-input"
                        style={{
                          border: errorPaswword ? "red solid 1px" : null,
                        }}
                        value={confirmPasswoad}
                        onChange={(e) => setConfirmpassword(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-8 col-sm-6">
                    <label
                      for="exampleInputPassword1"
                      className="registerModal-label"
                    >
                      Individuel/Company
                    </label>
                    <select
                      className="custom-select registerModal-select"
                      id="inputGroupSelect01"
                      value={type}
                      onChange={(e) => {
                        setType(e.target.value);
                        console.log("hoooy", type);
                      }}
                    >
                      <option value="individuel">Individuel</option>
                      <option value="company">Company</option>
                    </select>
                  </div>
                  <div className="col-8 col-sm-6">
                    {type == "company" ? (
                      <div className="form-group">
                        <label
                          for="exampleInputPassword1"
                          className="registerModal-label"
                        >
                          Matricule fiscale
                        </label>
                        <input
                          type="text"
                          className="form-control registerModal-input"
                          value={taxRegistration}
                          onChange={(e) => setTaxRegistration(e.target.value)}
                        />
                      </div>
                    ) : null}
                  </div>
                </div>

                <button type="submit" className="btn registerModal-submit">
                  Register
                </button>
              </form>
            </div>
          ) : (
            <div className="row align-items-center justify-content-center">
              <img src="https://nicefuntours.com/wp-content/uploads/2019/12/ShyCautiousAfricanpiedkingfisher-max-1mb.gif" />
              <p>Your account has been created sucessfully.</p>
              <p>
                {" "}
                Check your email please you'll find your account activation
                Link.
              </p>
            </div>
          )}
      </ModalBody>
    </Modal>
  );
};

export default SingUp;
