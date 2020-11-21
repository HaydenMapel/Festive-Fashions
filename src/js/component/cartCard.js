import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CartCard = props => {
	const { store, actions } = useContext(Context);
	let product = actions.getProduct(props.product.id);
	return (
		<div className="row darkBG">
			<img src={product.picture} className="card-img img-fluid col-2" />
			<div className="col-2">{product.name}</div>
			<div className="col-2">Size {props.product.size}</div>
			<div className="col-2">Quantity ?</div>
			<div className="col-2">${product.price}</div>
			<button
				className="col-2 text-danger btn btn-outline-light font-weight-bold"
				type="button"
				onClick={() => props.deleteCartItem(product.id)}>
				Remove Item from Cart
			</button>
		</div>
	);
};

CartCard.propTypes = {
	product: PropTypes.object,
	deleteCartItem: PropTypes.func
};
