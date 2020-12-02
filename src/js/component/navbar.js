import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "../../styles/home.scss";

export const Navbar = props => {
	const history = useHistory();
	let action = "";
	let userPage = "";
	let md5 = sessionStorage.getItem("md5");

	//check if user logged in with google
	if (props.loggedInWithGoogle == "true") {
		//display a google log out button, clear the session storage and redirect the user to the home page
		action = (
			<button
				onClick={() => {
					sessionStorage.clear();
					let isLoggedIn = sessionStorage.getItem("loggedInWithGoogle");
					props.setLoggedInWithGoogle(isLoggedIn);
					history.push("/");
				}}>
				Google_LogOut
			</button>
		);
		userPage = (
			<Link to={`/userPage/${md5}`}>
				<span className="navbar-brand mb-0 h1">Account</span>
			</Link>
		);
		//if the user does't use google to sign in, check if the user is logged in to display regular login or logout button on navBar
	} else if (props.loggedIn !== "true") {
		action = (
			<Link className="logInButton" to="/logIn">
				<span className="navbar-brand mb-0 h1">LogIn</span>
			</Link>
		);
	} else {
		action = (
			<button
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
		<nav className="navbar navbar-dark bg-dark">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Logo</span>
			</Link>
			<div className="ml-auto">
				<ul className="navUl">
					<li>
						<Link to="/">
							<span className="navbar-brand mb-0 h1">home</span>
						</Link>
					</li>
					<li>
						<Link to="/about">
							<span className="navbar-brand mb-0 h1">About</span>
						</Link>
					</li>
					<li>
						<Link to="/productList">
							<span className="navbar-brand mb-0 h1">productList</span>
						</Link>
					</li>
					<li>
						<Link to="/product">
							<span className="navbar-brand mb-0 h1">Shop</span>
						</Link>
					</li>
					<li>{userPage}</li>
				</ul>
			</div>
			<div>
				<span className="navbar-brand mb-0 h1">{action}</span>
				<Link to="/cart">
					<span className="navbar-brand mb-0 h1">
						<i className="fas fa-shopping-cart" />
					</span>
				</Link>
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
