import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ProductCard = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="card col-6">
			<div className="card-body">
				<h5 className="card-title">{props.product.name}</h5>
				<img src={props.product.picture} className="card-img img-fluid" alt="..." />
				<div className="row">
					<div className="col-6">
						<div>${props.product.price}</div>
						<div className="btn-group btn-group-toggle" data-toggle="buttons">
							<label className="btn btn-secondary">
								<input type="radio" name="options" id="option1" />S
							</label>
							<label className="btn btn-secondary">
								<input type="radio" name="options" id="option2" />M
							</label>
							<label className="btn btn-secondary">
								<input type="radio" name="options" id="option3" />L
							</label>
							<label className="btn btn-secondary">
								<input type="radio" name="options" id="option4" />
								XL
							</label>
						</div>
					</div>
					<div className="col-6">
						<button href="#" className="btn btn-danger">
							Add to Cart
						</button>
					</div>
				</div>
				<p className="card-text">{props.product.short_description}</p>
			</div>
		</div>
	);
};

ProductCard.propTypes = {
	product: PropTypes.object
};
