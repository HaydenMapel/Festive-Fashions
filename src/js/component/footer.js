import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn, MDBIcon } from "mdbreact";

export const Footer = () => {
	return (
		<MDBFooter id="MDBFooter" color="blue" className="font-small pt-4 footer ">
			<MDBContainer fluid className="text-center text-md-left">
				<MDBRow>
					<MDBCol md="4">
						<h5 className="title d-inline mr-3">Follow Us</h5>
						<ul className="footer-ul d-inline">
							<li className="list-unstyled">
								<a href="#!" className="fb-ic mr-3">
									<MDBIcon fab icon="facebook-f" />
								</a>
							</li>
							<li className="list-unstyled">
								<a href="#!" className="tw-ic mr-3">
									<MDBIcon fab icon="twitter" />
								</a>
							</li>
							<li className="list-unstyled">
								<a href="#!" className="li-ic mr-3">
									<MDBIcon fab icon="linkedin-in" />
								</a>
							</li>
							<li className="list-unstyled">
								<a href="#!" className="ins-ic mr-3">
									<MDBIcon fab icon="instagram" />
								</a>
							</li>
						</ul>
					</MDBCol>
					<MDBCol md="4" className="text-center">
						Copyright &copy; {new Date().getFullYear()} Festive Fashions
					</MDBCol>
					<MDBCol md="4">
						<Link to="/contact">Contact Us</Link>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
			{/* <div className="footer-copyright text-center py-3">
				<MDBContainer fluid>
					Copyright &copy; {new Date().getFullYear()} Festive Fashions
				</MDBContainer>
			</div> */}
		</MDBFooter>
	);
};
