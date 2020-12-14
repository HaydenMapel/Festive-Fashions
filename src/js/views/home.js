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
			<Carousel.Item interval={1000}>
				<img className="d-block w-100" src={winter} alt="First slide" />
				{/* <button className="caruselButton">Shop Now!</button> */}
				<Carousel.Caption>
					<Link to="/product" className="linkInlandingPage d-none d-md-block">
						<h3 className="shopNowLink">Shop Now!</h3>
					</Link>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={newYear} alt="Third slide" />
				<Carousel.Caption interval={1000}>
					<Link to="/product" className="linkInlandingPage d-none d-md-block">
						<h3 className="shopNowLink">Shop Now!</h3>
					</Link>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	</div>
);
