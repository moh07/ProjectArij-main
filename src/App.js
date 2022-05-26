import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    Home,
    Products,
    ProductDetail,
    Cart,
    Dashboard
} from "./Pages/Index";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from "react-router-dom";
import Checkout from "./Pages/checkout";
import ListeClients from "./Dashboard/Componentes/listeClients/ListeClients";
import * as actions from "./store/action/index";
import {ContactUs, CreatProject, Detail, Navbar} from "./Containers/index";
import "./App.css";
import "./Utils/Colors.css";
import EditProject from "./Containers/CreatProject/EditProject/EditProject";
// ------------------------DASHBOARD------------------------------------

import {
    NavbarDashboard,
    Dashboard_Dash,
    SideNav,
    Footer_Dash,
    MessagesContactUs
} from "./Dashboard/Containers/index";
import {
    CustomerList,
    ViewCustomer,
    ProductList,
    NewProduct,
    ViewProduct,
    EditProduct,
    OrderList,
    ViewOrder,
    CategoryList,
    TechnicalSupport,
    NewCategory,
    ChatBotDash
} from "./Dashboard/Componentes/index";
import {InformationRequest, MachineMaintenance, MachineSetup} from "./Components";
import DevisAdmin from "./Dashboard/Componentes/devisAdmin/DevisAdmin.js";
import EditCategory from "./Dashboard/Componentes/EditCategory/EditCategory";
import ExtractionContainer from "./Containers/ProductsContainer/ExtractionContainer";
import SechageContainer from "./Containers/ProductsContainer/Sechagecontainer";
import EmballageContainer from "./Containers/ProductsContainer/EmballageContainer";
import LaitiereContainer from "./Containers/ProductsContainer/LaitiereContainer";
import SystemeStockage from "./Containers/ProductsContainer/SousCategorieLaitiere/SystemeStockage";
import Fabrication from "./Containers/ProductsContainer/SousCategorieLaitiere/Fabrication";
import Ingredients from "./Containers/ProductsContainer/SousCategorieLaitiere/Ingredients";
import Vente from "./Containers/ProductsContainer/SousCategorieLaitiere/Vente";
import Reception from "./Containers/ProductsContainer/SousCategorieLaitiere/Reception";
import FabricationFromage from "./Containers/ProductsContainer/SousCategorieLaitiere/FabricationFromage";
import Higiene from "./Containers/ProductsContainer/SousCategorieLaitiere/Higiene";
import Distillation from "./Containers/ProductsContainer/SousCategorieExtraction/Distillation";
import Pressage from "./Containers/ProductsContainer/SousCategorieExtraction/Pressage";
import Conditionnement from "./Containers/ProductsContainer/SousCategorieEmballage/Conditionnement";
import Emballage from "./Containers/ProductsContainer/SousCategorieEmballage/Emballage";
import Sechage from "./Containers/ProductsContainer/SousCategorieSechage/Sechage";
import Broyage from "./Containers/ProductsContainer/SousCategorieSechage/Broyage";
import NavbarUser from "./Containers/Navbar/NavbarUser";
import TraiterDevis from "./Dashboard/Componentes/devisAdmin/TraiterDevis";
import DetailsDevis from "./Containers/account/Devis/DetailsDevis";
import ChatBoot from "./Components/ChatBoot/ChatBoot";
import GeneralNavBar from "./Containers/Navbar/GeneralNavBar";

// --------------------------------------------------------------------

async function addTostorage(data, name) {
        localStorage.setItem(name, JSON.stringify(data));
    

}

const App = () => {
    const dispatch = useDispatch();
        const token = localStorage.getItem("token");
        const user = JSON.parse(localStorage.getItem("user"));
        const oldUser = JSON.parse(localStorage.getItem("olduser"));

        console.log(user);
        // const token = user.jwt;
        const cart = useSelector((state) => state.rootReducer.cart);
        const fav = useSelector((state) => state.rootReducer.fav);

        useEffect(() => {
            dispatch(actions.getProducts());
            // dispatch(actions.checkTokenFromLocalStroage());
            if (JSON.parse(localStorage.getItem("cart")) && JSON.parse(localStorage.getItem("fav")) && JSON.parse(localStorage.getItem("user")) && oldUser) 
                if (oldUser.email !== user.email && user.role !== "admin") {
                    console.log("cart reseted")
                    localStorage.removeItem("cart");
                    localStorage.removeItem("fav");
                    localStorage.setItem("olduser", JSON.stringify(user))
                }
             else {
                console.log("refresh",JSON.parse(localStorage.getItem("cart")),JSON.parse(localStorage.getItem("fav")))
             dispatch(actions.refreshCart(JSON.parse(localStorage.getItem("cart"))) ?? []);
            dispatch(actions.refreshFav(JSON.parse(localStorage.getItem("fav"))) ?? []);
        }},
    []
);

useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("user")));
}, [user]);

useEffect(() => {

    addTostorage(cart, "cart");
    addTostorage(fav, "fav");
    console.log(" cart ", cart);
    console.log(" fav ", fav);
}, [cart, fav]);

const view = () => {
    if (user) {
        console.log("Role=>", user.role);
        switch (user.role) {
            case "admin":
                return (
                    <Router>
                        <NavbarDashboard/>
                        <SideNav/>
                        <div className="main-panel"
                            style={
                                {
                                    marginTop: "60px",
                                    zIndex: 2
                                }
                        }>
                            <Switch>
                                <Route path="/dashboard"
                                    component={Dashboard_Dash}
                                    exact/>
                                <Route path="/customer-list">
                                    <CustomerList/>
                                </Route>
                                <Route path="/view-customer">
                                    <ViewCustomer/>
                                </Route>

                                <Route exact path="/TraiterDevis/:id">
                                    <TraiterDevis/>
                                </Route>

                                <Route path="/product-list">
                                    <ProductList/>
                                </Route>
                                <Route path="/new-product">
                                    <NewProduct/>
                                </Route>
                                <Route path="/view-product">
                                    <ViewProduct/>
                                </Route>
                                <Route path="/category-list">
                                    <CategoryList/>
                                </Route>
                                <Route path="/new-category">
                                    <NewCategory/>
                                </Route>
                                <Route path="/edit-product">
                                    <EditProduct/>
                                </Route>
                                <Route path="/order-list">
                                    <OrderList/>
                                </Route>
                                <Route path="/edit-order">
                                    <ViewOrder/>
                                </Route>
                                <Route path="/edit-category">
                                    <EditCategory/>
                                </Route>
                                <Route path="/messages">
                                    <MessagesContactUs/>
                                </Route>
                                <Route path="/NavbarDashboard"
                                    component={NavbarDashboard}/>

                                <Route path="/technical-support">
                                    <TechnicalSupport/>
                                </Route>
                                <Route path="/liste-client">
                                    <ListeClients/>
                                </Route>
                                <Route path="/chatbot">
                                    <ChatBotDash/>
                                </Route>
                                <Route path="/devisadmin">
                                    <DevisAdmin/>
                                </Route>
                                <Route path="/"
                                    component={Home}/>
                            </Switch>
                        </div>
                    </Router>
                );
                break;
            case "user":
                return (
                    <Router>
                        <GeneralNavBar/>
                        <Switch>
                            <Route path="/Cart"
                                component={Cart}/>
                            <Route path="/machine-setup">
                                <MachineSetup/>
                            </Route>
                            <Route path="/machine-maintenance">
                                <MachineMaintenance/>
                            </Route>
                            <Route path="/information-request">
                                <InformationRequest/>
                            </Route>
                            <Route path="/chatbot"
                                component={ChatBoot}/>
                            <Route path="/items">
                                <Detail/>
                            </Route>
                            <Route path="/checkout"
                                component={Checkout}/>
                            <Route path="/editproject"
                                component={EditProject}/>
                            <Route path="/creatproject"
                                component={CreatProject}/>
                            <Route path="/dashboard"
                                component={Dashboard}/>
                            <Route path="/category/:id">
                                <Products/>
                            </Route>
                            <Route path="/Products/:id">
                                <ProductDetail/>
                            </Route>
                            <Route path="/"
                                component={Home}
                                exact/>
                            <Route path="/detailsDevis">
                                <DetailsDevis/>
                            </Route>
                        </Switch>
                    </Router>
                );
                break;
            default:
                break;
        }
    } else {
        return (
            <Router>
                <Navbar/>
                <Switch>
                    <Route path="/"
                        component={Home}
                        exact/>
                    <Route path="/Cart"
                        component={Cart}/>
                    <Route path="/allproducts">
                        <Products/>
                    </Route>

                    <Route path="/Laitiere"
                        component={LaitiereContainer}/>
                    <Route path="/Extraction des huiles essentielles et végétales"
                        component={ExtractionContainer}/>
                    <Route path="/Séchage et broyage"
                        component={SechageContainer}/>
                    <Route path="/Emballage et Conditionnement"
                        component={EmballageContainer}/>
                    <Route path="/SystemeStockage"
                        component={SystemeStockage}/>
                    <Route path="/Fabrication"
                        component={Fabrication}/>
                    <Route path="/Ingredients"
                        component={Ingredients}/>
                    <Route path="/Vente"
                        component={Vente}/>
                    <Route path="/Reception"
                        component={Reception}/>
                    <Route path="/FabricationFromage"
                        component={FabricationFromage}/>
                    <Route path="/Higiene"
                        component={Higiene}/>
                    <Route path="/Distillation"
                        component={Distillation}/>
                    <Route path="/Pressage"
                        component={Pressage}/>
                    <Route path="/Conditionnement"
                        component={Conditionnement}/>
                    <Route path="/Emballage"
                        component={Emballage}/>
                    <Route path="/Sechage"
                        component={Sechage}/>
                    <Route path="/Broyage"
                        component={Broyage}/>
                    <Route path="/contactus">
                        <ContactUs/>
                    </Route>
                    <Route path="/machine-setup">
                        <MachineSetup/>
                    </Route>
                    <Route path="/machine-maintenance">
                        <MachineMaintenance/>
                    </Route>
                    <Route path="/information-request">
                        <InformationRequest/>
                    </Route>
                    <Route path="/checkout"
                        component={Checkout}/>
                    <Route path="/editproject"
                        component={EditProject}/>
                    <Route path="/creatproject"
                        component={CreatProject}/>
                    <Route path="/dashboard"
                        component={Dashboard}/>

                    <Route path="/category/:id">
                        <Products/>
                    </Route>
                    <Route path="/Products/:id">
                        <ProductDetail/>
                    </Route>
                </Switch>
            </Router>
        );
    }
};

return <>{
    view()
}</>;};export default App;
