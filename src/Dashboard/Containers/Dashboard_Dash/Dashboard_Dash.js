import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import GroupIcon from '@material-ui/icons/Group';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import { getCustomers } from "../../../store/action/Customers";
import { getProducts } from "../../../store/action/products";
import { getOrders } from "../../../store/action/Orders";



const Dashboard_Dash = () => {

	const [item, setItem] = useState("");

	useEffect(() => {
	  console.log("item from all products");
	}, [item]);
  
  
  
	const products = useSelector(state => state.rootReducer.products);
	useEffect(() => {
		dispatch(getProducts())
	}, [])

	// -------------------------------

	const dispatch = useDispatch();
	const customer = useSelector(state => state.rootReducer.customer);
	useEffect(() => {
	  dispatch(getCustomers())
	}, [])

	const order = useSelector(state => state.rootReducer.order);
	useEffect(() => {
	  dispatch(getOrders())
	}, [])
	return (
		<div>
			<div className="main-panel">
				<div className="content">
					<div className="container-fluid">
						<h4 className="page-title">Dashboard</h4>
						<div className="row">
							<div className="col-md-3">
								<div className="card card-stats card-warning">
									<div className="card-body ">
										<div className="row">
											<div className="col-5">
												<div className="icon-big text-center ">

													<GroupIcon style={{ color: "#585a63" , fontSize:"58px"}} />
												</div>
											</div>
											<div className="col-7 d-flex align-items-center">
												<div className="numbers">
													<p className="card-category colorx">Customers</p>
													<h4 className="card-title colory">{customer.length}</h4>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-3">
								<div className="card card-stats card-success">
									<div className="card-body ">
										<div className="row">
											<div className="col-5">
												<div className="icon-big text-center">
													<LoyaltyIcon style={{ color: "#585a63" , fontSize:"58px"}}/>
													
												</div>
											</div>
											<div className="col-7 d-flex align-items-center">
												<div className="numbers">
													<p className="card-category colorx">Sales</p>
													<h4 className="card-title colory">$ 1,345</h4>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-3">
								<div className="card card-stats card-danger">
									<div className="card-body">
										<div className="row">
											<div className="col-5">
												<div className="icon-big text-center">
												
												<ShoppingCartIcon style={{ color: "#585a63" , fontSize:"58px"}}/>
												</div>
											</div>
											<div className="col-7 d-flex align-items-center">
												<div className="numbers">
													<p className="card-category colorx">Products</p>
													<h4 className="card-title colory">{products.length}</h4>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-3">
								<div className="card card-stats card-primary">
									<div className="card-body ">
										<div className="row">
											<div className="col-5">
												<div className="icon-big text-center">
													<FormatListBulletedIcon style={{ color: "#585a63" , fontSize:"58px"}}/>
												</div>
											</div>
											<div className="col-7 d-flex align-items-center">
												<div className="numbers">
													<p className="card-category colorx">Order</p>
													<h4 className="card-title colory">{order.length}</h4>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
													</div>

					</div>
				</div>
			</div>
		</div>
	)
}

export default Dashboard_Dash
