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
			cartItem.id = props.product.id;
			alert(props.product.name + " size " + size + " added to cart");

			// send cart object to local storage
			let cart = [];
			if (localStorage.getItem("cart")) {
				cart = JSON.parse(localStorage.getItem("cart"));
			}
			cart.push(cartItem);
			localStorage.setItem("cart", JSON.stringify(cart));

			console.log(cartItem);
		}
	}

	return (
		<div className="card col-6 my-3 border-0">
			<div className="card-body text-center font-weight-bold">
				<h5 className="card-title">{props.product.name}</h5>
				<img src={props.product.picture} className="card-img img-fluid mt-3" alt="..." />
				<div>
					<Form noValidate onSubmit={addToCart}>
						<Form.Row className="my-3">
							<div className="col-6">
								<div>${props.product.price}</div>
								<ToggleButtonGroup type="radio" name="options" className="btn-danger" required>
									<ToggleButton
										className="btn-danger form-control"
										value={"S"}
										required
										onChange={e => setSize(e.target.value)}>
										S
									</ToggleButton>
									<ToggleButton
										className="btn-danger form-control"
										value={"M"}
										required
										onChange={e => setSize(e.target.value)}>
										M
									</ToggleButton>
									<ToggleButton
										className="btn-danger form-control"
										value={"L"}
										required
										onChange={e => setSize(e.target.value)}>
										L
									</ToggleButton>
									<ToggleButton
										className="btn-danger form-control"
										value={"XL"}
										required
										onChange={e => setSize(e.target.value)}>
										XL
									</ToggleButton>
								</ToggleButtonGroup>
							</div>
							<div className="col-6">
								<button className="btn btn-danger" type="submit">
									Add to Cart
								</button>
							</div>
						</Form.Row>
					</Form>
				</div>
				<p className="card-text text-left font-weight-normal">{props.product.short_description}</p>
			</div>
		</div>
	);
};

ProductCard.propTypes = {
	product: PropTypes.object
};
