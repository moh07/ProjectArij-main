import axios from "axios";
import React, {Component, useEffect, useState} from "react";
import {NotificationManager} from "react-notifications";
import {useSelector} from "react-redux";
import instance from "../../../axios";
import "./Profile.css";

const Profile = (Props) => {

    console.log("Props", Props)
    const [form, setForm] = useState({});

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };


    const updateProfileHandler = async (e) => {
        e.preventDefault();
        const data = {
            firstname: form.firstname ?? Props.user.firstname,
            lastname: form.lastname ?? Props.user.lastname,
            phone: form.phone ?? Props.user.phone,
            address: form.address ?? Props.user.address,
            email: form.email ?? Props.user.email
        }
        instance.post("http://localhost:4000/person/" + Props.user.id, data).then((res) => {
            if (res.status === 200 || res.status === 201) {
                const {jwt} = res.data;
                // const decode = jwt_decode(jwt)
                localStorage.setItem("user", JSON.stringify(res.data.payload));
                localStorage.setItem("olduser", JSON.stringify(res.data.payload));

                console.log(res)

                window.location.reload();
            } else 
                alert(res.statusText)


            


            // if (res.data.payload.role === "admin") history.go("/dashboard");
            // else if (res.data.payload.role === "user") history.go("/dashboard");
        }).catch(err => alert(err.response.data.message));
    };

    // update password
    const updatePasswordHandler = async (e) => {
        e.preventDefault();
        const data = {
            newpassword: form.newpassword,
            oldpassword: form.oldpassword
        }
        instance.post("http://localhost:4000/person/updatepassword/" + Props.user.id, data).then((res) => {
            if (res.status === 200 || res.status === 201) {
                const {jwt} = res.data;
                // const decode = jwt_decode(jwt)
                localStorage.setItem("user", JSON.stringify(res.data.payload));
                localStorage.setItem("olduser", JSON.stringify(res.data.payload));

                console.log(res)

                window.location.reload();
            } else 
                alert(res.statusText)


            


            // if (res.data.payload.role === "admin") history.go("/dashboard");
            // else if (res.data.payload.role === "user") history.go("/dashboard");
        }).catch(err => alert(err.response.data.message));
    };
    return (
        <div className="dashboard-right card card-body account-right ">
            <div className="row">
                <div className="col-md-12">
                    <div className="main-title-tab">
                        <h4> {/* <PersonOutlineIcon/> */}
                            My profile
                        </h4>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12">
                    <div className="pdpt-bg ">
                        <form onSubmit={updateProfileHandler}>
                            <div className="row containairInputs">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label className="control-label">
                                            First Name
                                            <span className="required">*</span>
                                        </label>
                                        <input type="text" className="form-control Myprofilinputs"
                                            defaultValue={
                                                Props.user.firstname
                                            }
                                            aria-label="firstname"
                                            name="firstname"
                                            onChange={onChange}/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label className="control-label">
                                            Last Name
                                            <span className="required">*</span>
                                        </label>
                                        <input type="text" className="form-control Myprofilinputs"
                                            defaultValue={
                                                Props.user.lastname
                                            }
                                            aria-label="lastname"
                                            name="lastname"
                                            onChange={onChange}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label className="control-label">
                                            Phone
                                            <span className="required">*</span>
                                        </label>
                                        <input type="number" className="form-control Myprofilinputs"
                                            defaultValue={
                                                Props.user.phone
                                            }
                                            aria-label="Username"
                                            onChange={onChange}
                                            name="phone"/>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label className="control-label">
                                            Email Address
                                            <span className="required">*</span>
                                        </label>
                                        <input type="email" className="form-control Myprofilinputs"
                                            value={
                                                Props.user.email
                                            }
                                            aria-label="Username"
                                            name="email"
                                            disabled/>
                                    </div>
                                </div>

                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label className="control-label">
                                            Address
                                            <span className="required">*</span>
                                        </label>
                                        <input type="text" className="form-control Myprofilinputs"
                                            defaultValue={
                                                Props.user.address
                                            }
                                            aria-label="Username"
                                            onChange={onChange}
                                            name="address"/>
                                    </div>
                                </div>

                            </div>
                            <div className="row"
                                style={
                                    {marginBottom: "1rem"}
                            }>
                                <div className="col-sm-12 text-right ">
                                    <button className="btn btn-lg savebtn" type="submit">
                                        {" "}
                                        Save Changes{" "} </button>

                                </div>
                            </div>
                        </form>

                        {/* -------------------------------------------- */}
                        <div style={
                            {borderTop: "0.1px solid #dfdfdf"}
                        }></div>
                        <form onSubmit={updatePasswordHandler}>
                            <div>
                                <div className="row containairInputs">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label className="control-label">
                                                Old password *
                                                <span className="required">*</span>
                                            </label>
                                            <input type="text" className="form-control Myprofilinputs" placeholder="old password" aria-label="Username" name="oldpassword" required
                                                onChange={onChange}/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label className="control-label">
                                                New password *
                                                <span className="required">*</span>
                                            </label>
                                            <input type="text" className="form-control Myprofilinputs" placeholder="new password" aria-label="Username" name="newpassword" required
                                                onChange={onChange}/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* -------------------------------------------- */}

                            <div className="row">
                                <div className="col-sm-12 text-right ">
                                    <button type="submit" className="btn btn-lg savebtn">
                                        {" "}
                                        Save Changes{" "} </button>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
