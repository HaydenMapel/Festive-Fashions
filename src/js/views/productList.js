import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "../component/productCard.js";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const ProductList = () => {
	const { store, actions } = useContext(Context);
	let content = "";
	content = store.products.map((product, index) => <ProductCard key={index} product={product} />);

	return (
		<div className="container">
			<h2 className="text-center m-2">Season Name</h2>
			<div className="row">{content}</div>
		</div>
	);
};
