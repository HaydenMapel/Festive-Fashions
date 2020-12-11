import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartCard } from "../component/cartCard.js";
import { Context } from "../store/appContext";
import { PayPalButtons } from "../component/paypalButtons.js";
import "../../styles/demo.scss";
export const Cart = () => {
	const { store, actions } = useContext(Context);
	const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));

	console.log(cart);
	console.log(store);

	let content = "";
	let subtotal = "";
	let shipping = "";
	if (!cart || cart.length == 0) {
		content = <h4>No Products in Your Cart!</h4>;
		subtotal = 0.0;
		shipping = 0.0;
	} else {
		content = cart.map((product, index) => (
			<CartCard key={index} product={product} index={index} deleteCartItem={deleteCartItem} />
		));
		function deleteCartItem(index) {
			let newCart = cart.filter((product, idx) => idx !== index);
			if (newCart.length == 0) {
				localStorage.removeItem("cart");
				setCart([]);
			} else {
				localStorage.setItem("cart", JSON.stringify(newCart));
				setCart(newCart);
			}
		}

		function getSubtotal() {
			let total = 0;
			cart.map(product => {
				let price = parseFloat(actions.getProduct(product.ID).price) * product.count;
				total = total + price;
			});
			return total;
		}
		subtotal = getSubtotal();

		function getShipping() {
			let total = 0;
			cart.map(product => {
				let price = product.count * 5;
				total = total + price;
			});
			return total;
		}
		shipping = getShipping();
	}
	let totalPrice = (subtotal + shipping).toFixed(2);
	console.log("rerendering card with price", totalPrice);

	return (
		<div className="container blackBG text-light">
			<h2 className="text-center text-danger">Cart</h2>
			<div className="row">
				<div className="col-8">{content}</div>
				<div className="col-4 text-center">
					<div className="darkBG m-3">Login or Username</div>
					<div className="darkBG">
						<div>Subtotal ${subtotal.toFixed(2)}</div> <div>Shipping ${shipping.toFixed(2)}</div>
						<div>Total ${totalPrice}</div>
					</div>
					<PayPalButtons key={totalPrice} totalPrice={totalPrice} />
				</div>
			</div>
		</div>
	);
};
