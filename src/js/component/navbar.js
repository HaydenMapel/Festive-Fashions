import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
import Image from "react-bootstrap/Image";
import logo from "../../img/logoResized.png";
//import "../../styles/home.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import app from "../base";
import { AuthContext } from "../store/authContext";

export const NavbarComp = props => {
	const history = useHistory();
	let action = "";
	const { currentUser } = useContext(AuthContext);

	// let userPage = "";
	// let md5 = sessionStorage.getItem("md5");

	// let logout = () => {
	// 	//display a successful google response
	// 	console.log("[Logout successful] response: ", response);

	// 	//display aler message
	// 	alert("You just Logged Out! ", <i className="fas fa-check-circle"></i>);
	// };

	// //check if user logged in with google
	// if (props.loggedInWithGoogle == "true") {
	// 	//display a google log out button, clear the session storage and redirect the user to the home page
	// 	action = <SignOutButton setLoggedInWithGoogle={props.setLoggedInWithGoogle} />;

	// 	//display user account icon and direct to the user page
	// 	userPage = (
	// 		<Link className="mx-2 navText" to={`/userPage/${md5}`}>
	// 			<i className="fas fa-user-circle"></i>
	// 		</Link>
	// 	);
	let logoutButton = () => {
		app.auth().signOut();
		history.push("/");
	};
	// 	//if the user does't use google to sign in, check if the user is logged in to display regular login or logout button on navBar
	if (currentUser) {
		action = (
			<button className="btn btn-info btn-sm" onClick={logoutButton}>
				Log Out
			</button>
		);
	} else {
		action = (
			<Link to="/login" className="navText">
				Login
			</Link>
		);
	}
	// 	action = (
	// 		<Link to="/logIn" className="navText">
	// 			Login
	// 		</Link>
	// 	);
	// } else {
	// 	action = (
	// 		<button
	// 			className="loggedOutButton"
	// 			onClick={() => {
	// 				sessionStorage.clear();
	// 				let isLoggedIn = sessionStorage.getItem("loggedIn");
	// 				props.setLoggedIn(isLoggedIn);
	// 				history.push("/");
	// 			}}>
	// 			LogOut
	// 		</button>
	// 	);
	// 	userPage = (
	// 		<Link className="mx-2 navText" to={`/userPage/${md5}`}>
	// 			<i className="fas fa-user-circle"></i>
	// 		</Link>
	// 	);
	// }

	return (
		<Navbar expand="md" variant="dark" fixed="top">
			<div className="container-fluid mx-2">
				<Navbar.Brand className="mr-auto">
					<Link to="/" className="text-decoration-none">
						<h2 className="logo">Festive Fashions</h2>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Item className="mx-2">
							<Link to="/product" className="navText">
								Shop
							</Link>
						</Nav.Item>
						<Nav.Item className="mx-2">
							<Link to="/about" className="navText">
								About
							</Link>
						</Nav.Item>
						{/* <Nav.Item>{userPage}</Nav.Item> */}
						<Nav.Item className="mx-2 navText">{action}</Nav.Item>
						<Nav.Item className="mx-2 pt-2">
							<Link to="/cart">
								<i className="fas fa-shopping-cart navText" />
							</Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
};

// NavbarComp.propTypes = {
// 	loggedIn: PropTypes.string,
// 	setLoggedIn: PropTypes.func,
// 	loggedInWithGoogle: PropTypes.string,
// 	setLoggedInWithGoogle: PropTypes.func
// };
