import "./ProductsContainer.css";
import React from "react";
import "./categories.css" ;
import { Link , useLocation , useRouteMatch , Route , Switch} from "react-router-dom";
import Distillation from "./SousCategorieExtraction/Distillation";
import Pressage from "./SousCategorieExtraction/Pressage"



const ExtractionContainer = () => {
  let { path, url } = useRouteMatch();
  let location = useLocation();
  let souPath = location.pathname.split("/").reverse()[0];
 
  return (
    <div className="sidebar">
      <div className ="elementsSideBar">
      <Link
        to={`${url}/Distillation`}
        className={"user-item" + (souPath === "dashboard" ? "  active" : "")}
      >
       
        Distillation
      </Link>
      
      <Link
        to={`${url}/Pressage`}
        className={"user-item" + (souPath === "orders" ? "  active" : "")}
      >
       Presaage à froid
      </Link>

     
      </div>

<div className="dashboard-containern col-lg-9 col-md-8">
<div className="listeProduits">
  <Switch>
   
    <Route exact path={path + "/Distillation"}>
      < Distillation/>
    </Route>
    <Route exact path={path + "/Pressage"}>
      <Pressage />
    </Route>
   

  </Switch>
</div>
</div>
</div>
  );
};

export default ExtractionContainer;
