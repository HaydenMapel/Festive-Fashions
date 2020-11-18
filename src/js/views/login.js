import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
// import {
// 	MDBContainer,
// 	MDBRow,
// 	MDBCol,
// 	MDBCard,
// 	MDBCardBody,
// 	MDBInput,
// 	MDBBtn,
// 	MDBIcon,
// 	MDBModalFooter,
// 	MDBCardHeader
// } from "mdbreact";
import "../../styles/home.scss";

export const Login = props => {
	const { hasAccount, setHasAccount } = props;

	return (
		<div className="container logInForm">
			{hasAccount ? (
				<form className="text-center border border-dark p-5" action="#!">
					<p className="h4 mb-4 titleForm">Sign in</p>

					<input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail" />

					<input
						type="password"
						id="defaultLoginFormPassword"
						className="form-control mb-4"
						placeholder="Password"
					/>

					{/* <div className="d-flex justify-content-around">
						<div>
							<div className="custom-control custom-checkbox">
								<input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember" />
								<label className="custom-control-label" htmlor="defaultLoginFormRemember">
									Remember me
								</label>
							</div>
						</div>
						<div>
							<a href="">Forgot password?</a>
						</div>
					</div> */}

					<button className="btn btn-info btn-block my-4" type="submit">
						Sign in
					</button>

					<p>
						Do not have an account?
						{/* <a href="">Sign Up</a> */}
						<span onClick={() => setHasAccount(!hasAccount)}> Sign Up</span>
					</p>

					<p>or sign in with:</p>

					<a href="#" className="mx-2" role="button">
						<i className="fab fa-facebook-f light-blue-text"></i>
					</a>
					<a href="#" className="mx-2" role="button">
						<i className="fab fa-twitter light-blue-text"></i>
					</a>
					<a href="#" className="mx-2" role="button">
						<i className="fab fa-linkedin-in light-blue-text"></i>
					</a>
					<a href="#" className="mx-2" role="button">
						<i className="fab fa-github light-blue-text"></i>
					</a>
				</form>
			) : (
				<form className="text-center border border-dark p-5" action="#!">
					<p className="h4 mb-4 titleForm">Sign Up</p>

					<input type="text" id="defaultLoginFormName" className="form-control mb-4" placeholder="Name" />
					<input
						type="text"
						id="defaultLoginFormLastName"
						className="form-control mb-4"
						placeholder="Last Name"
					/>
					<input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail" />

					<input
						type="password"
						id="defaultLoginFormPassword"
						className="form-control mb-4"
						placeholder="Password"
					/>

					{/* <div className="d-flex justify-content-around">
						<div>
							<div className="custom-control custom-checkbox">
								<input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember" />
								<label className="custom-control-label" htmlor="defaultLoginFormRemember">
									Remember me
								</label>
							</div>
						</div>
						<div>
							<a href="">Forgot password?</a>
						</div>
					</div> */}

					<button className="btn btn-info btn-block my-4" type="submit">
						Sign Up
					</button>

					<p>
						Do you already have an account?
						{/* <a href="">Sign In</a> */}
						<span onClick={() => setHasAccount(!hasAccount)}> Sign In</span>
					</p>

					{/* <p>or sign in with:</p>

				<a href="#" className="mx-2" role="button">
					<i className="fab fa-facebook-f light-blue-text"></i>
				</a>
				<a href="#" className="mx-2" role="button">
					<i className="fab fa-twitter light-blue-text"></i>
				</a>
				<a href="#" className="mx-2" role="button">
					<i className="fab fa-linkedin-in light-blue-text"></i>
				</a>
				<a href="#" className="mx-2" role="button">
					<i className="fab fa-github light-blue-text"></i>
				</a> */}
				</form>
			)}
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};

Login.propTypes = {
	hasAccount: PropTypes.bool,
	setHasAccount: PropTypes.bool
};
