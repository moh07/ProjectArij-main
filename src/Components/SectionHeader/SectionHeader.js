import "./SectionHeader.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import language from "../../landingPage.json";
import { useSelector } from "react-redux";

const SectionHeader = ({ title, categoryId }) => {
  const lang = useSelector(state => state.rootReducer.language);
  return (
    <Link to={`/CATEGORY/${categoryId}`}>
      <div className='header'>
        <h1 className='header-title'>{title}</h1>
        <button className='btn header-button'>
          {" "}
          {lang === "english" ? language.more.english : language.more.arabic} >
        </button>
      </div>
    </Link>
  );
};

export default SectionHeader;