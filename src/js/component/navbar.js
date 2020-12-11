import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { SignOutButton } from "./signOutButton.js";
import { GoogleLogout } from "react-google-login";
import "../../styles/home.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const NavbarComp = props => {
	const history = useHistory();
	let action = "";
	let userPage = "";
	let md5 = sessionStorage.getItem("md5");

	let logout = () => {
		//display a successful google response
		console.log("[Logout successful] response: ", response);

		//display aler message
		alert("You just Logged Out! ", <i className="fas fa-check-circle"></i>);

		// sessionStorage.clear();
		// let isLoggedIn = sessionStorage.getItem("loggedInWithGoogle");
		// props.setLoggedInWithGoogle(isLoggedIn);

		// //Redirect the user to the home page after loggin in
		// history.push("/");
		// console.log(sessionStorage);
	};

	//check if user logged in with google
	if (props.loggedInWithGoogle == "true") {
		//display a google log out button, clear the session storage and redirect the user to the home page
		action = (
			<SignOutButton setLoggedInWithGoogle={props.setLoggedInWithGoogle} />

			// <button
			// 	onClick={() => {
			// 		sessionStorage.clear();
			// 		let isLoggedIn = sessionStorage.getItem("loggedInWithGoogle");
			// 		props.setLoggedInWithGoogle(isLoggedIn);
			// 		history.push("/");
			// 	}}>
			// 	Google_LogOut
			// </button>
		);
		userPage = (
			<Link className="mx-2" to={`/userPage/${md5}`}>
				Account
			</Link>
		);
		//if the user does't use google to sign in, check if the user is logged in to display regular login or logout button on navBar
	} else if (props.loggedIn !== "true") {
		action = <Link to="/logIn">Login</Link>;
	} else {
		action = (
			<button
				className="loggedOutButton mx-2"
				onClick={() => {
					sessionStorage.clear();
					let isLoggedIn = sessionStorage.getItem("loggedIn");
					props.setLoggedIn(isLoggedIn);
					history.push("/");
				}}>
				LogOut
			</button>
		);
		userPage = (
			<Link className="mx-2" to={`/userPage/${md5}`}>
				Account
			</Link>
		);
	}

	return (
		<Navbar expand="lg" bg="dark" variant="dark" fixed="top">
			<div className="container">
				<Navbar.Brand>
					<Link to="/">Festive Fashions</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Item className="mx-2">
							<Link to="/">Home</Link>
						</Nav.Item>
						<Nav.Item className="mx-2">
							<Link to="/product">Shop</Link>
						</Nav.Item>
						<Nav.Item className="mx-2">
							<Link to="/about">About</Link>
						</Nav.Item>
						<Nav.Item>{userPage}</Nav.Item>
						<Nav.Item className="mx-2">{action}</Nav.Item>
						<Nav.Item className="mx-2">
							<Link to="/cart">
								<i className="fas fa-shopping-cart" />
							</Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
};

NavbarComp.propTypes = {
	loggedIn: PropTypes.string,
	setLoggedIn: PropTypes.func,
	loggedInWithGoogle: PropTypes.string,
	setLoggedInWithGoogle: PropTypes.func
};
