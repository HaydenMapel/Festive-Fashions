import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { SignOutButton } from "./signOutButton.js";
import { GoogleLogout } from "react-google-login";
import "../../styles/home.scss";

export const Navbar = props => {
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
			<Link to={`/userPage/${md5}`}>
				<span className="navbar-brand mb-0 h1">Account</span>
			</Link>
		);
		//if the user does't use google to sign in, check if the user is logged in to display regular login or logout button on navBar
	} else if (props.loggedIn !== "true") {
		action = (
			<Link to="/logIn">
				<span className="navbar-brand mb-0 navText">LogIn</span>
			</Link>
		);
	} else {
		action = (
			<button
				className="loggedOutButton"
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
			<Link to={`/userPage/${md5}`}>
				<span className="navbar-brand mb-0 h1">Account</span>
			</Link>
		);
	}

	return (
		<nav className=" navbar fixed-top ">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 navText">Logo</span>
				</Link>
				<div className="ml-auto">
					<ul className="navUl">
						<li>
							<Link to="/">
								<span className="navbar-brand mb-0 navText">home</span>
							</Link>
						</li>
						<li>
							<Link to="/about">
								<span className="navbar-brand mb-0 navText">About</span>
							</Link>
						</li>
						<li>
							<Link to="/productList">
								<span className="navbar-brand mb-0 navText">productList</span>
							</Link>
						</li>
						<li>
							<Link to="/product">
								<span className="navbar-brand mb-0 navText">Shop</span>
							</Link>
						</li>
						<li>{userPage}</li>
					</ul>
				</div>
				<div>
					<span className="navbar-brand mb-0 navText">{action}</span>
					<Link to="/cart">
						<span className="navbar-brand mb-0 navText">
							<i className="fas fa-shopping-cart" />
						</span>
					</Link>
				</div>
			</div>
		</nav>
	);
};

Navbar.propTypes = {
	loggedIn: PropTypes.string,
	setLoggedIn: PropTypes.func,
	loggedInWithGoogle: PropTypes.string,
	setLoggedInWithGoogle: PropTypes.func
};
