import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "../component/productCard.js";
import { Context } from "../store/appContext";
import logo from "../../img/logoResized.png";
import christmas from "../../img/christmas_tshirt_main_card.jpeg";
import valentine from "../../img/valentine_tshirt_main_card.png";
import newyears from "../../img/newYear_tshirt_main_card.png";

import "../../styles/demo.scss";

export const ProductList = () => {
	const { store, actions } = useContext(Context);
	let content = "";
	content = store.products.map((product, index) => <ProductCard key={index} product={product} />);

	return (
		<div className="container">
			<div className="myContainer">
				<div className=" card testimonial-card ">
					{/* <!--Background color--> */}
					<div className="card-up christmas-gradient"></div>

					{/* <!--Avatar--> */}
					<div className="avatar mx-auto">
						<img src={christmas} className="rounded-circle img-responsive" alt="Example photo" />
					</div>

					<div className="card-body">
						{/* <!--Name--> */}
						<h4 className="card-title mt-1">Christmas</h4>
						<hr />
						{/* <!--Quotation--> */}
						<p>
							<i className="fa fa-quote-left"></i> Christmas magic is silent. You don&#39;t hear it — you
							feel it. You know it. You believe it.
						</p>
					</div>
				</div>
				<div className=" card testimonial-card ">
					{/* <!--Background color--> */}
					<div className="card-up sunny-morning-gradient"></div>

					{/* <!--Avatar--> */}
					<div className="avatar mx-auto">
						<img src={newyears} className="rounded-circle img-responsive" alt="Example photo" />
					</div>

					<div className="card-body">
						{/* <!--Name--> */}
						<h4 className="card-title mt-1">New Year</h4>
						<hr />
						{/* <!--Quotation--> */}
						<p>
							<i className="fa fa-quote-left"></i> Don’t live the same year 75 times and call it a life.
						</p>
					</div>
				</div>
				<div className=" card testimonial-card ">
					{/* <!--Background color--> */}
					<div className="card-up valentine-gradient"></div>

					{/* <!--Avatar--> */}
					<div className="avatar mx-auto">
						<img src={valentine} className="rounded-circle img-responsive" alt="Example photo" />
					</div>

					<div className="card-body">
						{/* <!--Name--> */}
						<h4 className="card-title mt-1">Valentine&#39;s</h4>
						<hr />
						{/* <!--Quotation--> */}
						<p>
							<i className="fa fa-quote-left"></i> You can&#39;t blame gravity for falling in love.
						</p>
					</div>
				</div>
			</div>
		</div>

		//  <div className="container text-center mx-auto">
		// 	<h2 className="text-center m-2 text-danger">Seasons</h2>
		// 	<Link
		// 		to={{
		// 			pathname: "/product/christmas"
		// 		}}
		// 		className="text-center row mx-auto">
		// 		<button className="btn btn-danger">Check Out Christmas T-Shirts</button>
		// 	</Link>
		// 	<Link
		// 		to={{
		// 			pathname: "/product/newyears"
		// 		}}
		// 		className="text-center row">
		// 		<button className="btn btn-danger">Check Out New Year&#39;s Eve T-Shirts</button>
		// 	</Link>
		// 	<Link
		// 		to={{
		// 			pathname: "/product/valentines"
		// 		}}
		// 		className="text-center row">
		// 		<button className="btn btn-danger">Check Out Valentine&#39;s Day T-Shirts</button>
		// 	</Link>
		// </div>
	);
};
