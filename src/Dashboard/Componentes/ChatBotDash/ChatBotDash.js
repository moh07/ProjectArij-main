import React from 'react';
import TodoList from './TodoList';


const ChatBotDash = () => {
    return (
        <div>
            <div>
                <div className="main-panel">
                    <div className="row" style={{ margin: "7% 1% 1%" }}>
                        <div className="col-12">
                            <div className="card mb-4">
                                <div className=" row card-header pb-0">
                                    <div className="col-4">
                                        <h6>ChatBot</h6>
                                    </div>
                                </div>
                                {/* <div style={{margin:"2%"}}>  */}


                                <TodoList/>
                                   
                            {/* </div> */}
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
}

            export default ChatBotDash
