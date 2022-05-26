import React, { useState } from "react";
import shoppingBasket from "../../Assets/Images/shoppingBasket.png";
import checkouticon from "../../Assets/Images/checkouticon.svg";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import "./styledrawer.css";
import Drawer from "@material-ui/core/Drawer";
import { ListItems } from "../../Containers/index";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import instance from "../../axios";
import { notification } from "antd";

// SwipeableDrawer component. @material-ui
const useStyles = makeStyles({
  list: {
    width: 500,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer() {
  const itemsNumber = useSelector((state) => state.rootReducer.cart);
  let [dataSource, setDataSource] = useState([]);

  const openNotificationWithIcon = (type) => {
    notification[type]({message: "devis creqcted with success", description: "This is the content of the notification. This is the content of the notification. This is the content of the notification."});
};
  const onSave = (e) => {
    e.preventDefault();
    itemsNumber.map((v, i) => {
      dataSource.push({
        quantity:v.qte,
        productId:v.id
      })
    })
    instance.get("/commande/getAll").then((resp) => {
      console.log(resp);
      openNotificationWithIcon("success")
  }).catch((e) => {
      console.log(e);
  });
    instance.post("/commande/add", {commandeDetails: dataSource}).then((resp) => {
        console.log(resp);
        openNotificationWithIcon("success")
    }).catch((e) => {
        console.log(e);
    });
};
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  ////////

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="title-mycart">
        <h3 className="mycart">My Cart ({itemsNumber.length} Items)</h3>
      </div>
      {/* --footer cart-- */}

      <div className="cart-sidebar-footer">
        <div className="cart-store-details">
          <p>
            Delivery Charges{" "}
            <strong className="float-right text-danger">
              + 0 <span className="dt">DT</span>
            </strong>
          </p>
          <h6>
            Your total savings{" "}
            <strong className="float-right text-danger">
              {itemsNumber.reduce((a, b) => {
                return a + b.price * b.qte;
              }, 0)}{" "}
              <span className="dt">DTT</span>
            </strong>
          </h6>
        </div>
        <Link to={`/Checkout`} onClick={toggleDrawer(anchor, false)}>
          <button 
            className="btn  btn-lg btn-block text-left mycartcheckout"
            type="button"
            onClick={onSave}
          >
            <span className="float-left">
              <img src={checkouticon} className="mycarticon " /> Proceed to
              Checkout{" "}
            </span>
            <span className="float-right">
              <strong>
                {itemsNumber.reduce((a, b) => {
                  return  a+ b.price * b.qte;
                }, 0)}{" "}
              </strong>
              TND <span className="mdi mdi-chevron-right" />
            </span>
          </button>
        </Link>
      </div>
      <ListItems />
    </div>
  );

  return (
    <div style={{right:"5px !important"}}>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}        >
          <div>
            <img
              src={shoppingBasket}
              onClick={toggleDrawer(anchor, true)}
              className="nav-item-img"
              style={{ cursor: "pointer" }}
            />
            <span className="badge badge-warning text-white cart_icon">
              {itemsNumber.length}
            </span>
          </div>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            style={{right:"5px !important"}}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
