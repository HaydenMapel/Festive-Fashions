import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import newYear from "../../img/new_years_landing_page.png";
import winter from "../../img/christmas_landing_page.png";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

import Carousel from "react-bootstrap/Carousel";

export const Home = () => (
	<div>
		<Carousel>
			<Carousel.Item>
				<img className="d-block w-100" src={winter} alt="First slide" />
				{/* <button className="caruselButton">Shop Now!</button> */}
				<Carousel.Caption>
					<Link to="/product" className="shopNowLink">
						<h3>Shop Now!</h3>
					</Link>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				{/* interval={1000} */}
				<img className="d-block w-100" src={newYear} alt="Third slide" />

				<Carousel.Caption>
					<Link to="/product" className="shopNowLink">
						<h3>Shop Now!</h3>
					</Link>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	</div>
);
