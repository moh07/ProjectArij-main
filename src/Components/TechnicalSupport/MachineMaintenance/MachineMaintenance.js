import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom"
import * as actions from "../../../store/action/TechnicalSupport";
import { Footer } from "../../../Containers/index";
// import "./ContactUs.css";
import imagcontact from "../../../Assets/Images/Img_Contact.svg";
import { DatePicker, Radio, Input, Button } from 'antd';
import moment from 'moment';

const { TextArea } = Input;
const dateFormat = 'YYYY/MM/DD';

const customFormat = value => `Date: ${value.format(dateFormat)}`;

const MachineMaintenance = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const [subject, setSubject] = useState("");
    const [date, setDate] = useState("");
    const [address, setAddress] = useState("");
    const [details, setDetails] = useState("");
    const [type, setType] = useState("Machin Maintenance");

    const hundelMachineMaintenance = () => {
        try {
            let handler = { subject, date, address, details, type }
            dispatch(actions.AddTechnicalSupport(handler))
            //   history.push("/")
        } catch (error) {
            // History.push("/")
        }


    }

    const handelDate = (d, datestring) => {
        console.log(d)
        console.log(datestring)
        setDate(datestring)
    }


    return (

        <div className="contactus" style={{ backgroundColor: "#f6f7fe" }}>
            <div className="contentcontact">
                <div className="container">
                    < div className="row justify-content-center" >
                        < div >
                            <h3 className="heading mb-4">Machine Maintenance</h3>
                            <h5>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Voluptas debitis, Voluptas debitis, fugit natus Voluptas debitis, fugit natus?
                            </h5>
                            <Input placeholder="Subject"
                                onChange={(e) => setSubject(e.target.value)}
                                style={{ marginTop: "2.2%" }}
                                size="large"
                            />

                            {/* -------------- */}
                            <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={customFormat}
                                onChange={handelDate}
                                style={{ marginTop: "2.2%" }}
                                size="large"
                            />
                            {/* -------------- */}
                            <Radio.Group name="radiogroup"
                                onChange={(e) => setAddress(e.target.value)}
                                style={{ marginLeft: "7%" }}
                                size="large"
                            >
                                <Radio value={1}>MAFI</Radio>
                                <Radio value={2}>MY ADDRESS</Radio>
                            </Radio.Group>

                            {/* -------------- */}
                            <TextArea rows={4}
                                placeholder="Mor Details ... "
                                onChange={(e) => setDetails(e.target.value)}
                                style={{ marginTop: "2.2%" }}
                                size="large"
                            />
                            {/* -------------- */}
                            <Button type="primary"
                                style={{ backgroundColor: "#A4C755", marginTop: "2.2%" }}
                                onClick={() => hundelMachineMaintenance()}
                                size="large"

                            >Submit</Button>


                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MachineMaintenance



