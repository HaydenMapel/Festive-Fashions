import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CartCard = props => {
	const { store, actions } = useContext(Context);
	let product = actions.getProduct(props.product.ID);

	return (
		<div className="row mt-3">
			<img src={product.picture} className="rounded card-img img-fluid col-6 col-md-2" />
			<div className="col-6 col-md-2 font-weight-bold">{product.name}</div>
			<div className="col-3 col-md-2">
				Size:
				<span className="font-weight-bold"> {props.product.size}</span>
			</div>
			<div className="col-3 col-md-2">
				Quantity:
				<span className="font-weight-bold"> {props.product.count}</span>
			</div>
			<div className="col-3 col-md-2">
				Price:
				<span className="font-weight-bold">
					{" "}
					${(parseFloat(product.price) * props.product.count).toFixed(2)}
				</span>
			</div>
			<button
				className="col-3 col-md-2 text-center btn btn-sm btn-outline-danger font-weight-bold p-0 deleteButton"
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
