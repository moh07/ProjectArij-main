import "./Modals.css";
import Login from "../Login/Login";
import SingUp from "../SingUp/SingUp";
const Modals = (props) => {
  return (
    <div>
      <Login isOpen={props.loginOpen} onClose={props.onCloseLogin}/>
      <SingUp isOpen={props.registerOpen} onClose={props.onCloseSignup}/>
    </div>
  );
};

export default Modals;
