import "./ProductsContainer.css";
import React from "react"; 
import "./categories.css" ;
import { Link , useLocation , useRouteMatch , Route , Switch} from "react-router-dom";
import Broyage from "./SousCategorieSechage/Broyage";
import Sechage from "./SousCategorieSechage/Sechage";




const Sechagecontainer= () => {
  
  let { path, url } = useRouteMatch();
  let location = useLocation();
  let souPath = location.pathname.split("/").reverse()[0];
    
 
  return (
    <div className="sidebar">
      <div className ="elementsSideBar">
      <Link
        to={`${url}/Broyage`}
        className={"user-item" + (souPath === "dashboard" ? "  active" : "")}
      >
       
       Broyage
      </Link>
      
      <Link
        to={`${url}/Sechage`}
        className={"user-item" + (souPath === "orders" ? "  active" : "")}
      >
       Sechage 
      </Link>

     
      </div>

<div className="dashboard-containern col-lg-9 col-md-8">
<div className="listeProduits">
  <Switch>
   
    <Route exact path={path + "/Broyage"}>
      < Broyage/>
    </Route>
    <Route exact path={path + "/Sechage"}>
      <Sechage/>
    </Route>
   

  </Switch>
</div>
</div>
</div>
  );
  
};

export default Sechagecontainer;