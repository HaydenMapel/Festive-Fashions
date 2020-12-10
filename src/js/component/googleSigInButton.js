import React from "react";
import PropTypes from "prop-types";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";
import MD5 from "crypto-js/md5";

export const GoogleSignInButton = props => {
	const clientID = "186674746870-2ihe83atnv1b8najstagj2u34rqbt5gn.apps.googleusercontent.com";
	const history = useHistory();

	//Google response functions
	let onSuccess = response => {
		//display a successful google response
		console.log("[Login successful] response: ", response);

		//******** we can use these functions to get user info **********/
		//setGoogleUserName(response.profileObj.givenName);
		//setGoogleUserEmail(response.profileObj.email);

		//if the response is successful then set the logged in in the session storage
		sessionStorage.setItem("loggedInWithGoogle", true);

		//store the user name in sessionStorage
		sessionStorage.setItem("name", response.profileObj.givenName);

		//hash the user's google id and use that has for a page identifier
		let md5 = MD5(response.profileObj.googleId).toString();
		sessionStorage.setItem("md5", md5);

		//This function sets the state of the loggedInWithGoogle variable in the layout.js. It is used to start the session on the user that logged in using google
		props.setLoggedInWithGoogle("true");

		//Redirect the user to the home page after loggin in
		history.push("/");
		console.log(sessionStorage);
	};

	let onFailure = response => {
		console.log("[Login failed] response: ", response);
		alert("Unable to Sign In");
	};
	return (
		<GoogleLogin
			clientId={clientID}
			buttonText="Sign In"
			onSuccess={onSuccess}
			onFailure={onFailure}
			cookiePolicy={"single_host_origin"}
		/>
	);
};

GoogleSignInButton.propTypes = {
	setLoggedInWithGoogle: PropTypes.func
};
