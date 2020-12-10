import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartCard } from "../component/cartCard.js";
import { Context } from "../store/appContext";
import { PayPalButtons } from "../component/paypalButtons.js";

import "../../styles/demo.scss";

export const Cart = () => {
	const { store, actions } = useContext(Context);
	const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
	const [paid, setPaid] = useState(false);

	console.log(cart);
	console.log(store);

	function deleteCartItem(index) {
		let newCart = cart.filter((product, idx) => idx !== index);
		localStorage.setItem("cart", JSON.stringify(newCart));
		setCart(newCart);
	}

	function getSubtotal() {
		let total = 0;
		cart.map(product => {
			let price = parseFloat(actions.getProduct(product.ID).price) * product.count;
			total = total + price;
		});
		return total;
	}
	function getShipping() {
		let total = 0;
		cart.map(product => {
			let price = product.count * 5;
			total = total + price;
		});
		return total;
	}

	// let content = "";
	// content = cart.map((product, index) => (
	// 	<CartCard key={index} product={product} index={index} deleteCartItem={deleteCartItem} />
	// ));

	// let totalPrice = (getSubtotal() + getShipping()).toFixed(2);
	// console.log(totalPrice);

	// let checkoutButton = (
	// 	<button className="btn btn-danger rounded-pill btn-block mx-auto">Login to Checkout with Paypal</button>
	// );

	// if (sessionStorage.getItem("loggedIn")) {
	// 	checkoutButton = <PayPalButtons totalPrice={totalPrice} />;
	// }

	//if the cart is empty or null we get an error when rendering the page the first time
	// we can use conditional rendering to avoid this
	let result = "";
	if (localStorage.getItem("cart") === null) {
		result = (
			<div>
				<h1 style={{ color: "white" }}>YOUR CART IS EMPTY!</h1>
			</div>
		);
	} else {
		let content = "";
		content = cart.map((product, index) => (
			<CartCard key={index} product={product} index={index} deleteCartItem={deleteCartItem} />
		));
		let totalPrice = (getSubtotal() + getShipping()).toFixed(2);
		console.log(totalPrice);

		let checkoutButton = (
			<button className="btn btn-danger rounded-pill btn-block mx-auto">Login to Checkout with Paypal</button>
		);

		if (sessionStorage.getItem("loggedIn")) {
			checkoutButton = <PayPalButtons totalPrice={totalPrice} />;
		}
		result = (
			<div className="container blackBG text-light">
				<h2 className="text-center text-danger">Cart</h2>
				<div className="row">
					<div className="col-8">{content}</div>
					<div className="col-4 text-center">
						<div className="darkBG m-3">Login or Username</div>
						<div className="darkBG">
							<div>Subtotal ${getSubtotal().toFixed(2)}</div>
							<div>Shipping ${getShipping().toFixed(2)}</div>
							<div>Total ${totalPrice}</div>
						</div>
						<div>{checkoutButton}</div>
						{/* <button className="btn btn-danger rounded-pill btn-block mx-auto">Login to Checkout with Paypal</button>
					<PayPalButtons totalPrice={totalPrice} /> */}
					</div>
				</div>
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		);
	}

	return result;
	// <div className="container blackBG text-light">
	// 	<h2 className="text-center text-danger">Cart</h2>
	// 	<div className="row">
	// 		<div className="col-8">{content}</div>
	// 		<div className="col-4 text-center">
	// 			<div className="darkBG m-3">Login or Username</div>
	// 			<div className="darkBG">
	// 				<div>Subtotal ${getSubtotal().toFixed(2)}</div>
	// 				<div>Shipping ${getShipping().toFixed(2)}</div>
	// 				<div>Total ${totalPrice}</div>
	// 			</div>
	// 			<div>{checkoutButton}</div>
	// 			{/* <button className="btn btn-danger rounded-pill btn-block mx-auto">Login to Checkout with Paypal</button>
	// 			<PayPalButtons totalPrice={totalPrice} /> */}
	// 		</div>
	// 	</div>
	// 	<Link to="/">
	// 		<button className="btn btn-primary">Back home</button>
	// 	</Link>
	// </div>
};
