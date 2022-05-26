import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./MessagesContactUs.css";
import { getQuestions } from "../../../store/action/Question";
import SendIcon from '@material-ui/icons/Send';

const MessagesContactUs = () => {
  const dispatch = useDispatch();
  const question = useSelector(state => state.rootReducer.questions)
  const [UserDataHolder, setUserDataHolder] = useState()
  useEffect(() => { dispatch(getQuestions()) }, [])
  console.log("question=>", question)
  return (
    <div>
      <div className="main-panel">
        <div className="row" style={{ margin: "7% 1% 1%" }}>
          <div className="col-12">
            <div className="card mb-4">
              <div className=" row card-header pb-0">
                <div className="col-4">
                  <h6>Add New Product</h6>
                </div>
              </div>

              <div>
                <div id="container">
                  <aside>
                    <header>
                      {/* <input type="text" placeholder="search" /> */}
                    </header>
                    <ul>
                      {question ?
                        question.map((item) => {
                          return (<li onClick={() => setUserDataHolder(item)}>
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt="" />
                            <div>
                              <h2>{item.name}</h2>
                              
                              {/* <h3>
                                <span className="status orange"></span>
                                offline
                              </h3> */}
                            </div>
                          </li>)

                        })

                        : null

                      }

                    </ul>
                  </aside>
                  <main>
                    {UserDataHolder ?
                      <>
                        <header>
                          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt="" />

                          <div>
                            <h2>Chat with {UserDataHolder.name}</h2>
                            <h3>{UserDataHolder.email}</h3>
                          </div>
                          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_star.png" alt="" />
                        </header>
                        <ul id="chat">

                          <li className="you">
                            <div className="entete">
                              <span className="status green"></span>
                              <h2 style={{ marginRight: '1rem' }}>{UserDataHolder.name}</h2>

                              <h3>{UserDataHolder.createdAt.split("T")[0]}</h3>
                            </div>
                            <div className="triangle"></div>
                            <div className="message">
                              {UserDataHolder.message}
                            </div>
                          </li>

                          <li className="me">
                            <div className="entete">
                              <h3>10:12AM, Today</h3>
                              <h2>Vincent</h2>
                              <span className="status blue"></span>
                            </div>
                            <div className="triangle"></div>
                            <div className="message">
                              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                            </div>
                          </li>


                        </ul>
                      </>
                      : null}

                    <footer>
                      <textarea placeholder="Type your message"></textarea>
                      {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png" alt="" />
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_file.png" alt="" /> */}
                      <a href="#">Send
                      
                      <SendIcon
                      Size="Lar"
                      />
                      </a>
                    </footer>
                  </main>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessagesContactUs
