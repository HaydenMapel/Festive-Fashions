import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Form from "react-bootstrap/Form";

export const ProductDetail = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let product = actions.getProduct(params.ID);
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
			cartItem.ID = product.ID;
			cartItem.count = parseInt(count);
			alert(count + " " + product.name + " size " + size + " added to cart");

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
		<div className="container">
			<div className="card my-3 border-0">
				<div className="card-body text-center font-weight-bold">
					<h5 className="card-title pinkText">{product.name}</h5>
					<div className="row">
						<img
							src={product.picture}
							className="col-10 col-md-5 mx-auto card-img img-fluid mt-3"
							alt="..."
						/>
						<Form noValidate onSubmit={addToCart} className="mx-auto col-10 col-md-5">
							<Form.Row className="justify-content-center">
								<div className="">
									<Form.Label className="mt-3">Price</Form.Label>
									<div className="mb-3">${product.price}</div>
									<div className="mt-3">
										<Form.Label>Size</Form.Label>
									</div>
									<ToggleButtonGroup type="radio" name="options" className="btn-info mb-3" required>
										<ToggleButton
											className="btn-info form-control"
											value={"S"}
											required
											onChange={e => setSize(e.target.value)}>
											S
										</ToggleButton>
										<ToggleButton
											className="btn-info form-control"
											value={"M"}
											required
											onChange={e => setSize(e.target.value)}>
											M
										</ToggleButton>
										<ToggleButton
											className="btn-info form-control"
											value={"L"}
											required
											onChange={e => setSize(e.target.value)}>
											L
										</ToggleButton>
										<ToggleButton
											className="btn-info form-control"
											value={"XL"}
											required
											onChange={e => setSize(e.target.value)}>
											XL
										</ToggleButton>
									</ToggleButtonGroup>
									<Form.Group controlId="exampleForm.ControlSelect1" className="my-3">
										<Form.Label>Quantity</Form.Label>
										<Form.Control
											size="sm"
											as="select"
											defaultValue="1"
											onChange={e => setCount(e.target.value)}>
											<option value={1}>1</option>
											<option value={2}>2</option>
											<option value={3}>3</option>
											<option value={4}>4</option>
											<option value={5}>5</option>
										</Form.Control>
									</Form.Group>
									<button className="btn btn-info btn-lg my-3" type="submit">
										Add to Cart
									</button>
								</div>
							</Form.Row>
						</Form>
						<p className="card-text text-left font-weight-normal my-3 mx-5">{product.long_description}</p>
						<Link
							to={{
								pathname: "/product/"
							}}
							className="mx-auto text-decoration-none">
							<button className="btn btn-info">Check Out More T-Shirts</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
