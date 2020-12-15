import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "../component/productCard.js";
import { ScrollToTop } from "../component/scrollToTop.js";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Christmas = () => {
	const { store, actions } = useContext(Context);
	let season = store.products.filter(product => product.season == "christmas");
	let content = "";
	content = season.map((product, index) => <ProductCard key={index} product={product} />);

	return (
		<div className="container p-0">
			<h2 className="text-center text-light m-2">Christmas</h2>
			<div className="row justify-content-center">{content}</div>
			<div className="row m-3">
				<Link
					to={{
						pathname: "/product/newyears"
					}}
					className="col-6 text-center">
					<button className="btn btn-danger">Check Out Our New Year&#39;s Eve T-Shirts</button>
				</Link>
				<Link
					to={{
						pathname: "/product/valentines"
					}}
					className="col-6 text-center">
					<button className="btn btn-danger">Check Out Our Valentine&#39;s Day T-Shirts</button>
				</Link>
			</div>
		</div>
	);
};
