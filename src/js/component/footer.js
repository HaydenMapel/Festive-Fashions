import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
//import "../../styles/home.scss";

export const Footer = () => {
	return (
		<div className="footer container-fluid pt-1">
			<div className="row">
				<div className="col-5">
					<div className="row"></div>
					<div className="mr-3 d-none d-md-inline-block">Follow Us</div>
					<ul className="d-inline-block p-0">
						<li className="d-inline-block col-2">
							<div className="rounded-circle mr-3 socialMediaBadges">
								<a href="https://www.facebook.com">
									<i className="fab fa-facebook-f"></i>
								</a>
							</div>
						</li>
						<li className="d-inline-block col-2">
							<div className="rounded-circle mr-3 socialMediaBadges">
								<a href="https://www.twitter.com">
									<i className="fab fa-twitter"></i>
								</a>
							</div>
						</li>
						<li className="d-inline-block col-2">
							<div className="rounded-circle mr-3 socialMediaBadges ">
								<a href="https://www.linkedin.com">
									<i className="fab fa-linkedin-in"></i>
								</a>
							</div>
						</li>
						<li className="d-inline-block col-2">
							<div className="rounded-circle mr-3 socialMediaBadges ">
								<a href="https://www.instagram.com">
									<i className="fab fa-instagram"></i>
								</a>
							</div>
						</li>
					</ul>
				</div>
				<div className="col-4 justify-content-center d-flex align-items-center">
					Copyright &copy; {new Date().getFullYear()} Festive Fashions
				</div>
				<div className="col-3 justify-content-end d-flex align-items-center">
					<Link to="/contact" className="footercontactText">
						Contact Us
					</Link>
				</div>
			</div>
		</div>
	);
};
