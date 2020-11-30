import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { UserPage } from "./userPage";
import MD5 from "crypto-js/md5";
//  import {
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
	let hasAccount = props.hasAccount;
	const history = useHistory();
	const { store, actions } = useContext(Context);

	//variables to hold user inputs
	const [name, setName] = useState("");
	const [last_name, setLast_name] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	//const [ID, setID] = useState(null);

	//function to submit the sign Up form
	let handleSubmitSignUp = e => {
		//if the fields are empty return an alert message
		if (!name || !last_name || !email || !password) {
			alert("Please make sure all the fields are complete");
			return;
		}
		//if not, prevent the page from refreshing and call the function addUser from flux to add a new user to store
		e.preventDefault();
		let isSameEmail = actions.addUser(name, last_name, email, password);
		console.log(isSameEmail);

		//negate setHasAccount to render the signIn form
		if (!isSameEmail) {
			props.setHasAccount(!hasAccount);
		} else {
			setEmail("");
		}
	};

	//function to submit the sign in form
	let handleSubmitSignIn = e => {
		//if the fields are empty return an alert message
		if (!email || !password) {
			alert("Please make sure all the fields are complete");
			return;
		}
		//if not, prevent the page from refreshing and call the isUser function from flux to see if the user exists in the store
		e.preventDefault();
		let isUser = actions.isUser(email, password);

		//if the user does not exist, return an alert message. If the user exists, redirect the user's page.
		if (!isUser) {
			alert("User Name and Password Not Found. Please Try again or Sign Up");
		} else {
			//get the user ID
			let ID = actions.getUserID(isUser, email, password);
			let ID_String = ID.toString();
			//set logIN to true in sessionStorage
			sessionStorage.setItem("loggedIn", true);
			sessionStorage.setItem("ID", ID);
			console.log(sessionStorage);
			let isLoggedIn = sessionStorage.getItem("loggedIn");
			props.setLoggedIn(isLoggedIn);
			//redirect to user's page and hash the ID using md5
			let md5 = MD5(ID_String).toString();
			sessionStorage.setItem("md5", md5);
			//history.push(`/userPage/${MD5(ID_String).toString()}`);
			history.push("/");
			//we can also redirect using Redirect from react-router-dom
			//1. declare - 2. declare const redirect variable to false
			//- 3. create an arrow function to return a redirect component and the call tha function in the return of the main component

			//call the setID function from props to then pass it into the userpage component
			props.setID(ID);
		}
	};

	return (
		<div className="container logInForm">
			{hasAccount ? (
				<form className="text-center border border-dark p-5" action="#!" onSubmit={handleSubmitSignIn}>
					<p className="h4 mb-4 titleForm">Sign in</p>

					<input
						type="email"
						id="defaultLoginFormEmail"
						className="form-control mb-4"
						placeholder="E-mail"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>

					<input
						type="password"
						id="defaultLoginFormPassword"
						className="form-control mb-4"
						placeholder="Password"
						value={password}
						onChange={e => setPassword(e.target.value)}
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
						<span onClick={() => props.setHasAccount(!hasAccount)}> Sign Up</span>
					</p>

					<p>or sign in with:</p>

					<a href="#" className="mx-2" role="button">
						<i className="fab fa-facebook-f light-blue-text" />
					</a>
					<a href="#" className="mx-2" role="button">
						<i className="fab fa-twitter light-blue-text" />
					</a>
					<a href="#" className="mx-2" role="button">
						<i className="fab fa-linkedin-in light-blue-text" />
					</a>
					<a href="#" className="mx-2" role="button">
						<i className="fab fa-github light-blue-text" />
					</a>
				</form>
			) : (
				<form className="text-center border border-dark p-5" action="#!" onSubmit={handleSubmitSignUp}>
					<p className="h4 mb-4 titleForm">Sign Up</p>

					<input
						type="text"
						id="defaultLoginFormName"
						className="form-control mb-4"
						placeholder="Name"
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					<input
						type="text"
						id="defaultLoginFormLastName"
						className="form-control mb-4"
						placeholder="Last Name"
						value={last_name}
						onChange={e => setLast_name(e.target.value)}
					/>
					<input
						type="email"
						id="defaultLoginFormEmail"
						className="form-control mb-4"
						placeholder="E-mail"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>

					<input
						type="password"
						id="defaultLoginFormPassword"
						className="form-control mb-4"
						placeholder="Password"
						value={password}
						onChange={e => setPassword(e.target.value)}
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
						<span onClick={() => props.setHasAccount(!hasAccount)}> Sign In</span>
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
			{/* <Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link> */}
		</div>
	);
};

Login.propTypes = {
	hasAccount: PropTypes.bool,
<<<<<<< HEAD
	setHasAccount: PropTypes.func,
	ID: PropTypes.number,
	setID: PropTypes.func,
	setLoggedIn: PropTypes.func
=======
	setHasAccount: PropTypes.func
>>>>>>> 57d7b9ff9b97cf63ff8c693d68dee44835164103
};
