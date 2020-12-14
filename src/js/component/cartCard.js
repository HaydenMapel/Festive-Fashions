import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CartCard = props => {
	const { store, actions } = useContext(Context);
	let product = actions.getProduct(props.product.ID);

	return (
		<div className="row mt-3">
			<img src={product.picture} className="card-img img-fluid col-6 col-md-2" />
			<div className="col-6 col-md-2 font-weight-bold">{product.name}</div>
			<div className="col-3 col-md-2">Size: {props.product.size}</div>
			<div className="col-3 col-md-2">Quantity: {props.product.count}</div>
			<div className="col-3 col-md-2">${(parseFloat(product.price) * props.product.count).toFixed(2)}</div>
			<button
				className="col-3 col-md-2 text-center text-danger btn btn-outline-light font-weight-bold p-0"
				type="button"
				onClick={() => props.deleteCartItem(props.index)}>
				Remove
			</button>
		</div>
	);
};

CartCard.propTypes = {
	product: PropTypes.object,
	deleteCartItem: PropTypes.func,
	index: PropTypes.number
};
