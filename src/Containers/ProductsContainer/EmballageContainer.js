import "./ProductsContainer.css";
import React from "react";
import "./categories.css" ;
import { Link , useLocation , useRouteMatch , Route , Switch} from "react-router-dom";
import Emballage from "./SousCategorieEmballage/Emballage" ;
import Conditionnement from "./SousCategorieEmballage/Conditionnement" ;






const EmballageContainer = () => {
  
  let { path, url } = useRouteMatch();
  let location = useLocation();
  let souPath = location.pathname.split("/").reverse()[0];
 
  return (
    
   
    <div className="sidebar">
    <div className ="elementsSideBar">
    <Link
      to={`${url}/Conditionnement`}
      className={"user-item" + (souPath === "dashboard" ? "  active" : "")}
    >
     
     Conditionnement
    </Link>
    
    <Link
      to={`${url}/Emballage`}
      className={"user-item" + (souPath === "orders" ? "  active" : "")}
    >
     Emballage
    </Link>

   
    </div>

<div className="dashboard-containern col-lg-9 col-md-8">
<div className="listeProduits">
<Switch>
 
  <Route exact path={path + "/Conditionnement"}>
    < Conditionnement/>
  </Route>
  <Route exact path={path + "/Emballage"}>
    <Emballage/>
  </Route>
 

</Switch>
</div>
</div>
</div>
);

};


export default EmballageContainer;
