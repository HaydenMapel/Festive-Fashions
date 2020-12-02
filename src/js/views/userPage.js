import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { LogIn } from "./login";
import "../../styles/home.scss";

export const UserPage = props => {
	//let ID = props.ID;
	let ID = sessionStorage.getItem("ID");
	const { store, actions } = useContext(Context);
	let userName = actions.getSingleUser(ID);
	console.log(ID);

	console.log(userName);
	let name = sessionStorage.getItem("name");
	let isLoggedInWithGoogle = sessionStorage.getItem("loggedInWithGoogle");
	//let isLoggedIn = sessionStorage.getItem("loggedIn");

	// const result = (

	// );

	return (
		<div className="text-center mt-5">
			{isLoggedInWithGoogle ? (
				<h1>Hellow {name}, This is your account logged in with google info!</h1>
			) : (
				<h1>Hellow {userName.name}, This is your account info!</h1>
			)}
		</div>
	);
};

UserPage.propTypes = {
	ID: PropTypes.number
};
