import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "../component/productCard.js";
import { Context } from "../store/appContext";
import { ScrollToTop } from "../component/scrollToTop.js";

import "../../styles/demo.scss";

export const Valentines = () => {
	const { store, actions } = useContext(Context);
	let season = store.products.filter(product => product.season == "valentines");
	let content = "";
	content = season.map((product, index) => <ProductCard key={index} product={product} />);

	return (
		<div className="container p-0">
			<h2 className="text-center text-light m-2">Valentine&#39;s Day</h2>
			<div className="row justify-content-center">{content}</div>
			<div className="row m-3">
				<Link
					to={{
						pathname: "/product/newyears"
					}}
					className="col-6 text-center">
					<button className="btn btn-info">Check Out Our New Year&#39;s Eve T-Shirts</button>
				</Link>
				<Link
					to={{
						pathname: "/product/christmas"
					}}
					className="col-6 text-center">
					<button className="btn btn-info">Check Out Our Christmas T-Shirts</button>
				</Link>
			</div>
		</div>
	);
};
