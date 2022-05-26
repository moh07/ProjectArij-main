// import React from "react";

// import clsx from "clsx";
// import { makeStyles } from "@material-ui/core/styles";
// import Drawer from "@material-ui/core/Drawer";
// import { useSelector } from "react-redux";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import NotificationsIcon from "@material-ui/icons/Notifications";
// import { OneNotification } from "..";

// // SwipeableDrawer component. @material-ui
// const useStyles = makeStyles({
//   list: {
//     width: 400,
//   },
//   fullList: {
//     width: "auto",
//   },
// });

// export default function TemporaryDrawer() {
//   const itemsNumber = useSelector((state) => state.rootReducer.cart);
//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     console.log("clickkkkk");
//     if (
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   ////////

//   const list = (anchor) => (
//     <div
//       className={clsx(classes.list, {
//         [classes.fullList]: anchor === "top" || anchor === "bottom",
//       })}
//       role="presentation"
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <div className="title-mycart">
//         <h3 className="mycart"> {itemsNumber.length} Notifications</h3>
//       </div>
//       <div>
//         <OneNotification />
//       </div>
//     </div>
//   );

//   return (
//     <div>
//       {["right"].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <div
//             style={{ marginLeft: "10px" }}
//             onClick={toggleDrawer(anchor, true)}
//           >
//             <NotificationsIcon
//               onClick={toggleDrawer(anchor, true)}
//               className="nav-item-img"
//               style={{ cursor: "pointer", fontSize: "2.3rem" }}
//             />
//             <span
//               className="badge badge-warning text-white cart_icon"
//               style={{ marginLeft: "-0.7rem" }}
//             >
//               {itemsNumber.length}
//             </span>
//           </div>

//           <Drawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//           >
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }
