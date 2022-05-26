import { Board } from "../../Components/index";
import { Link } from "react-router-dom";
import "./ServicesContainer.css";
import boardImg from "../../Assets/Images/BoardImage.svg";
import boardImg2nd from "../../Assets/Images/BoardImage2nd.svg";
import landingPage from "../../landingPage.json";
import language from "../../landingPage.json";
import { useSelector } from "react-redux";
const ServicesContainer = () => {
  const lang = useSelector(state => state.rootReducer.language);
  return (
    <section id='Services'>
      <h1 className='Services-title'>
        {" "}
        {lang === "english"
          ? language.services.english
          : language.services.arabic}{" "}
      </h1>
      <div className='row justify-content-center Services-container'>
        <Link to={"/machine-setup"}>
          <div className='col-8 col-sm-7 col-md-3 item-animation' style={style}>
            <Board
              img={boardImg}
              category={
                lang === "english"
                  ? language.MachineSetup.english
                  : language.MachineSetup.arabic
              }></Board>
          </div>
        </Link>
        <Link to={"/information-request"}>
          <div
            className='col-8 col-sm-7 col-md-3 Services-container-circle item-animation'
            style={style}>
            <Board
              img={boardImg2nd}
              category={
                lang === "english"
                  ? language.InformationRequest.english
                  : language.InformationRequest.arabic
              }></Board>
          </div>
        </Link>
        <Link to={"/machine-maintenance"}>
          <div className='col-8 col-sm-7 col-md-3 item-animation' style={style}>
            <Board
              img={boardImg}
              category={
                lang === "english"
                  ? language.MachineMaintenance.english
                  : language.MachineMaintenance.arabic
              }></Board>
          </div>
        </Link>
      </div>
    </section>
  );
};

const style = {
  maxWidth: 245,
};

export default ServicesContainer;