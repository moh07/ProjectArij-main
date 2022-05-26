import "./ProductsContainer.css";
import React from "react";
import "./categories.css"
import { Link , useLocation , useRouteMatch , Route , Switch} from "react-router-dom";
import SystemeStockage from "../../Containers/ProductsContainer/SousCategorieLaitiere/SystemeStockage"
import Fabrication from "../../Containers/ProductsContainer/SousCategorieLaitiere/Fabrication";
import Ingredients from "../../Containers/ProductsContainer/SousCategorieLaitiere/Ingredients";
import Vente from "../../Containers/ProductsContainer/SousCategorieLaitiere/Vente";
import Reception from "../../Containers/ProductsContainer/SousCategorieLaitiere/Reception";
import FabricationFromage from "../../Containers/ProductsContainer/SousCategorieLaitiere/FabricationFromage";
import Higiene from "../../Containers/ProductsContainer/SousCategorieLaitiere/Higiene";

const LaitiereContainer = () => {
  let { path, url } = useRouteMatch();
  let location = useLocation();
  let souPath = location.pathname.split("/").reverse()[0];
  return (
    <div className="sidebar">
      <div className ="reception">
      <Link
        to={`${url}/Reception`}
        className={"user-item" + (souPath === "dashboard" ? "  active" : "")}
      >
       
        Reception et traitement de lait 
      </Link>
      
      <Link
        to={`${url}/FabricationFromage`}
        className={"user-item" + (souPath === "orders" ? "  active" : "")}
      >
       Fabrication de fromage
      </Link>

      <Link
        to={`${url}/SystemeStockage`}
        className={"user-item" + (souPath === "favorites" ? "  active" : "")}
      >
       Système d'affinage et stockage
      </Link>

      <Link
        to={`${url}/Fabrication`}
        className={"user-item" + (souPath === "devis" ? "  active" : "")}
      >
       Fabrication de yaourt / Lben/ beurre 
      </Link>
      <Link
        to={`${url}/Ingredients`}
        className={"user-item" + (souPath === "devis" ? "  active" : "")}
      >
       Ingrédients
      </Link>
      <Link
        to={`${url}/Vente`}
        className={"user-item" + (souPath === "devis" ? "  active" : "")}
      >
      Vente et exposition
      </Link>
      <Link
        to={`${url}/Higiene`}
        className={"user-item" + (souPath === "devis" ? "  active" : "")}
      >
      Hygiène et sécurité 
      </Link>
      </div>

<div className="liste-produits">

  <Switch>
   
    <Route exact path={path + "/Reception"}>
      < Reception/>
    </Route>
    <Route exact path={path + "/FabricationFromage"}>
      <FabricationFromage />
    </Route>
    <Route exact path={path + "/SystemeStockage"}>
      <SystemeStockage />
    </Route>
    <Route exact path={path + "/Fabrication"}>
      <Fabrication />
    </Route>
    <Route exact path={path + "/Ingredients"}>
      <Ingredients/>
    </Route>
    <Route exact path={path + "/Vente"}>
      <Vente/>
    </Route>
    <Route exact path={path + "/Higiene"}>
      <Higiene/>
    </Route>

  </Switch>
</div>
</div>

  );
};

export default LaitiereContainer;
