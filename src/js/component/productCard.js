import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Form from "react-bootstrap/Form";

export const ProductCard = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [size, setSize] = useState("");
	const [count, setCount] = useState("1");
	// function to add selected product and size to local storage
	function addToCart(e) {
		e.preventDefault();

		// require size selection when adding to cart
		if (size.length === 0) {
			alert("Please choose a size");
		} else {
			// create cart object
			let cartItem = {};
			cartItem.size = size;
			cartItem.ID = props.product.ID;
			cartItem.count = parseInt(count);
			alert(count + " " + props.product.name + " size " + size + " added to cart");

			// send cart object to local storage
			let cart = [];
			if (localStorage.getItem("cart")) {
				cart = JSON.parse(localStorage.getItem("cart"));
			}

			// check if product already exists in cart and add to existing item if so
			if (cart.some(product => cartItem.ID == product.ID && cartItem.size == product.size)) {
				cart.forEach(function(product) {
					if (cartItem.ID == product.ID && cartItem.size == product.size)
						product.count = product.count + cartItem.count;
				});
			} else cart.push(cartItem);

			localStorage.setItem("cart", JSON.stringify(cart));

			console.log(cartItem);
		}
	}

	return (
		<div className="card col-6 my-3 border-0">
			<div className="card-body text-center font-weight-bold">
				<Link
					className=" card-title h5"
					to={{
						pathname: "/product/" + props.product.ID
					}}>
					<h5 className="card-title">{props.product.name}</h5>
					<img src={props.product.picture} className="card-img img-fluid mt-3" alt="..." />
				</Link>
				<div>${props.product.price}</div>
				<p className="card-text text-left font-weight-normal">{props.product.short_description}</p>
				<Link
					to={{
						pathname: "/product/" + props.product.ID
					}}>
					<button className="btn btn-danger">Learn more about this product</button>
				</Link>
			</div>
		</div>
	);
};

ProductCard.propTypes = {
	product: PropTypes.object
};
