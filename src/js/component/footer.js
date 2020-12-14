import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn, MDBIcon } from "mdbreact";

export const Footer = () => {
	return (
		<div className="fs-5 footer">
			<div className=" container-fluid">
				<div className="row">
					<div className="col-4">
						<div className="row text-left"></div>
						<div className="d-inline-block mr-3 col">Follow Us</div>
						<ul className="d-inline-block col">
							<li className="d-inline-block">
								<div className="rounded-circle mr-3 socialMediaBadges">
									<i className="fab fa-facebook-f"></i>
								</div>
							</li>
							<li className="d-inline-block">
								<div className="rounded-circle mr-3 socialMediaBadges">
									<i className="fab fa-twitter"></i>
								</div>
							</li>
							<li className="d-inline-block">
								<div className="rounded-circle mr-3 socialMediaBadges">
									<i className="fab fa-linkedin-in"></i>
								</div>
							</li>
							<li className="d-inline-block">
								<div className="rounded-circle mr-3 socialMediaBadges">
									<i className="fab fa-instagram"></i>
								</div>
							</li>
						</ul>
					</div>
					<div className="col-4 text-center">
						Copyright &copy; {new Date().getFullYear()} Festive Fashions
					</div>
					<div className="col-4 text-right">
						<Link to="/contact" className="navText">
							Contact Us
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
