import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom"
import * as actions from "../../store/action/Question";
import "./ContactUs.css";

import imagcontact from "../../Assets/Images/Img_Contact.svg";
import { Link } from "react-router-dom";
import { Footer } from "../../Containers/index";
import ChatBoot from "../../Components/ChatBoot/ChatBoot";
const ContactUs = () => {
  const dispatch = useDispatch(); 
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); 
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
   const [errorInputs, setErrorInputs] = useState("");

  const hundelcontact = () => {
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      name ,
      email ,
      subject ,
      message
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost:4000/contactus", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
 

      if(
        name=="" ||
         email=="" || 
         subject =="" || 
         message ==""
      ){
         setErrorInputs("Please fill in all the input!");
      }
  }
  return (
    <>
      {/* <Link to={"/contactus"}></Link> */}
      <div className="contactus">
        <div className="contentcontact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <h3 className="heading mb-4">Let's talk about everything!</h3>
                   


                    <img
                      src={imagcontact}
                      alt="Image"
                      className="img-fluid"
                    />

                  </div>
                  <div className="col-md-6">
                    <form
                      className="mb-5"
                      id="contactForm"
                      name="contactForm"
                    >
                      <div className="row">
                        <div className="col-md-12 form-group">
                          <input
                            type="text"
                            className="form-control form-control-contactus"
                            name="name"
                            id="name"
                            placeholder="Your name"
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 form-group">
                          <input
                            type="text"
                            className="form-control form-control-contactus"
                            name="email"
                            id="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 form-group">
                          <input
                            type="text"
                            className="form-control form-control-contactus"
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                            onChange={(e) => setSubject(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 form-group">
                          <textarea
                            className="form-control form-control-contactus"
                            name="message"
                            id="message"
                            cols="30"
                            rows="7"
                            placeholder="Write your message"
                            onChange={(e) => setMessage(e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <button

                            value="Send Message"
                            className="btncontact btn   rounded-0 py-2 px-4 "
                            onClick={() => hundelcontact()}
                            style={{backgroundColor:"#A4C755"}}
                          >
                            Send Message
                          </button>

                          <span className="submitting"></span>
                        </div>
                      </div>
                    </form>

                    <div id="form-message-warning mt-4"></div>
                    <div id="form-message-success">
                      Your message was sent, thank you!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChatBoot/>
      <Footer />
    </>
  );
};

export default ContactUs;
