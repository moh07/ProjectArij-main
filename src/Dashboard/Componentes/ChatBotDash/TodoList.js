import React, { useEffect, useState } from "react";
import CreateTask from "./modals/CreateTask";
import Card from "./Card";
import chatbotSteps from "../../../Components/ChatBoot/steps.json";
const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    setTaskList(chatbotSteps);
    if (taskList[1] !== undefined) console.log("bot", taskList[1].options[0]);
  }, []);

  const deleteTask = index => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const updateListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = taskObj => {
    // let tempList = taskList;
    // tempList.push(taskObj);
    // localStorage.setItem("taskList", JSON.stringify(tempList));
    chatbotSteps.push({
      id: "5",
      message: "Click on register button then fill the form",
      trigger: "2",
    });
    setTaskList(taskList);
    setModal(false);
  };

  return (
    <>
      <div className='header text-center'>
        {/* <h3>Todo List</h3> */}
        <img
          style={{ width: "5%" }}
          src="data:image/svg+xml,%3csvg version='1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3e%3cpath d='M303 70a47 47 0 1 0-70 40v84h46v-84c14-8 24-23 24-40z' fill='%2393c7ef'/%3e%3cpath d='M256 23v171h23v-84a47 47 0 0 0-23-87z' fill='%235a8bb0'/%3e%3cpath fill='%2393c7ef' d='M0 240h248v124H0z'/%3e%3cpath fill='%235a8bb0' d='M264 240h248v124H264z'/%3e%3cpath fill='%2393c7ef' d='M186 365h140v124H186z'/%3e%3cpath fill='%235a8bb0' d='M256 365h70v124h-70z'/%3e%3cpath fill='%23cce9f9' d='M47 163h419v279H47z'/%3e%3cpath fill='%2393c7ef' d='M256 163h209v279H256z'/%3e%3cpath d='M194 272a31 31 0 0 1-62 0c0-18 14-32 31-32s31 14 31 32z' fill='%233c5d76'/%3e%3cpath d='M380 272a31 31 0 0 1-62 0c0-18 14-32 31-32s31 14 31 32z' fill='%231e2e3b'/%3e%3cpath d='M186 349a70 70 0 1 0 140 0H186z' fill='%233c5d76'/%3e%3cpath d='M256 349v70c39 0 70-31 70-70h-70z' fill='%231e2e3b'/%3e%3c/svg%3e"
        />
      </div>
      <button className='btn btn-primary mt-2' onClick={() => setModal(true)}>
        Create Question / Respanse
      </button>

      <div className='task-container'>
        {taskList[1] !== undefined &&
          taskList[1].options.map((obj, index) => (
            <Card
              taskObj={obj}
              index={index}
              deleteTask={deleteTask}
              updateListArray={updateListArray}
            />
          ))}
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default TodoList;