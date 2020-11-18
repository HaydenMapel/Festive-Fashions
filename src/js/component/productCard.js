import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

export const ProductCard = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="card col-6 my-3 border-0">
			<div className="card-body text-center font-weight-bold">
				<h5 className="card-title">{props.product.name}</h5>
				<img src={props.product.picture} className="card-img img-fluid mt-3" alt="..." />
				<div className="row my-3">
					<div className="col-6">
						<div>${props.product.price}</div>
						<ToggleButtonGroup type="radio" name="options">
							<ToggleButton className="btn-danger" value={1}>
								S
							</ToggleButton>
							<ToggleButton className="btn-danger" value={2}>
								M
							</ToggleButton>
							<ToggleButton className="btn-danger" value={3}>
								L
							</ToggleButton>
							<ToggleButton className="btn-danger" value={4}>
								XL
							</ToggleButton>
						</ToggleButtonGroup>
					</div>
					<div className="col-6">
						<button href="#" className="btn btn-danger">
							Add to Cart
						</button>
					</div>
				</div>
				<p className="card-text text-left font-weight-normal">{props.product.short_description}</p>
			</div>
		</div>
	);
};

ProductCard.propTypes = {
	product: PropTypes.object
};
