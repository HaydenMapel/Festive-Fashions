import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "../component/productCard.js";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const ProductList = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container text-center mx-auto">
			<h2 className="text-center m-2 pinkText">Seasons</h2>
			<Link
				to={{
					pathname: "/product/christmas"
				}}
				className="text-center row mx-auto">
				<button className="btn btn-info">Check Out Christmas T-Shirts</button>
			</Link>
			<Link
				to={{
					pathname: "/product/newyears"
				}}
				className="text-center row">
				<button className="btn btn-info">Check Out New Year&#39;s Eve T-Shirts</button>
			</Link>
			<Link
				to={{
					pathname: "/product/valentines"
				}}
				className="text-center row">
				<button className="btn btn-info">Check Out Valentine&#39;s Day T-Shirts</button>
			</Link>
		</div>
	);
};
