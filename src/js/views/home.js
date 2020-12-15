import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import newYear from "../../img/new_years_landing_page.png";
import winter from "../../img/christmas_landing_page.png";
import valentine from "../../img/valentine_landing_page.png";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import Button from "react-bootstrap/Button";

import Carousel from "react-bootstrap/Carousel";

export const Home = () => (
	<div>
		<Carousel>
			<Carousel.Item interval={1000}>
				<img className="d-block img-fluid" src={winter} alt="First slide" />
				{/* <button className="caruselButton">Shop Now!</button> */}
				<Carousel.Caption>
					<Link to="/product" className="linkInlandingPage">
						<div className="row">
							<div className="col sm">
								<Button className="shopNowLink" size="lg">
									Shop Now!
								</Button>{" "}
							</div>
						</div>
					</Link>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block img-fluid" src={newYear} alt="Third slide" />
				<Carousel.Caption interval={1000}>
					<Link to="/product" className="linkInlandingPage">
						<Button className="shopNowLink" size="lg">
							Shop Now!
						</Button>{" "}
					</Link>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={valentine} alt="Third slide" />
				<Carousel.Caption interval={1000}>
					<Link to="/product" className="linkInlandingPage">
						<Button className="shopNowLink" size="lg">
							Shop Now!
						</Button>{" "}
					</Link>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	</div>
);
