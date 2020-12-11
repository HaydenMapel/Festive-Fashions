import React from "react";
import PropTypes from "prop-types";
import GoogleLogout from "react-google-login";
import { useHistory } from "react-router-dom";

export const SignOutButton = props => {
	const history = useHistory();

	let signOut = () => {
		//display aler message
		alert("You just Logged Out! ", <i className="fas fa-check-circle"></i>);

		//Clear the session and set the loggedIn variable to the value of the empty session storage or false
		sessionStorage.clear();
		let isLoggedIn = sessionStorage.getItem("loggedInWithGoogle");
		props.setLoggedInWithGoogle(isLoggedIn);

		//Redirect the user to the home page after loggin in
		history.push("/");
	};

	return (
		<a
			href=""
			className="signOutButton"
			onClick={() => {
				signOut();
			}}>
			Sign Out
		</a>
	);
};

SignOutButton.propTypes = {
	setLoggedInWithGoogle: PropTypes.func
};
