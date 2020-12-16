import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { LogIn } from "./login";
import Card from "react-bootstrap/Card";
import "../../styles/home.scss";

export const UserPage = props => {
	//grab the user ID from pops when sign in
	let propsID = props.ID;
	//grab the user ID fom sessionStorage when sign in
	let ID = sessionStorage.getItem("ID");

	const { store, actions } = useContext(Context);
	//store the result from conditional rendering
	let result = "";

	//store user data in user variable
	let user = actions.getSingleUser(ID);
	console.log(ID);
	console.log("props id is:");
	console.log(propsID);

	console.log(user);
	//this variables are use to get all the user's data provided by the google sign in
	let name = sessionStorage.getItem("name");
	let fullName = sessionStorage.getItem("fullName");
	console.log(name);

	let email = sessionStorage.getItem("email");
	let picture = sessionStorage.getItem("picture");

	let isLoggedInWithGoogle = sessionStorage.getItem("loggedInWithGoogle");

	if (isLoggedInWithGoogle) {
		result = (
			<Card id="cardInUserPage" style={{ width: "18rem" }}>
				<Card.Img variant="top" src={picture} />
				<Card.Body>
					<Card.Title>ACCOUNT</Card.Title>
					<Card.Text>Welcome! Here is your info</Card.Text>
				</Card.Body>
				<Card.Body>{fullName}</Card.Body>
				<Card.Body>{email}</Card.Body>
				<Card.Body>Purchase History</Card.Body>
			</Card>
		);
	} else {
		result = (
			<Card id="cardInUserPage" style={{ width: "18rem" }}>
				<Card.Body>
					<Card.Title>ACCOUNT</Card.Title>
					<Card.Text>Welcome! Here is your info</Card.Text>
				</Card.Body>
				<Card.Body>
					{user.name} {user.lastName}
				</Card.Body>
				<Card.Body>{user.email}</Card.Body>
				<Card.Body>Purchase History</Card.Body>
			</Card>
			// <Card className="cardInUserPage" style={{ width: "18rem" }}>
			// 	<Card.Body>
			// 		<Card.Title>{user.name}</Card.Title>
			// 		<Card.Text>Welcome to your account! Here is your info</Card.Text>
			// 	</Card.Body>
			// 	<Card.Body>
			// 		{user.name} {user.lastName}
			// 	</Card.Body>
			// 	<Card.Body>{user.email}</Card.Body>

			// 	<Card.Body>Purchase History</Card.Body>
			// </Card>
		);
	}

	return (
		<div className="mainUserpageContainer">
			<div>{result}</div>
			{/* {isLoggedInWithGoogle ? (
				<h1>Hellow {name}, This is your account logged in with google info!</h1>
			) : (
				<h1>Hellow {user.name}, This is your account info!</h1>
			)} */}
		</div>
	);
};

UserPage.propTypes = {
	ID: PropTypes.number
};
