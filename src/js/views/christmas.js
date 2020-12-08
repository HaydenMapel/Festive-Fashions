import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "../component/productCard.js";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Christmas = () => {
	const { store, actions } = useContext(Context);
	let season = store.products.filter(product => product.season == "christmas");
	let content = "";
	content = season.map((product, index) => <ProductCard key={index} product={product} />);

	return (
		<div className="container">
			<h2 className="text-center m-2">Christmas</h2>
			<div className="row">{content}</div>
			<div className="row">
				<Link
					to={{
						pathname: "/product/newyears"
					}}
					className="col-6 text-center">
					<button className="btn btn-danger">Check Out New Year&#39;s Eve T-Shirts</button>
				</Link>
				<Link
					to={{
						pathname: "/product/valentines"
					}}
					className="col-6 text-center">
					<button className="btn btn-danger">Check Out Valentine&#39;s Day T-Shirts</button>
				</Link>
			</div>
		</div>
	);
};
