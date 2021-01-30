import React, { useCallback, useContext } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import app from "../base.js";
import PropTypes from "prop-types";
import { AuthContext } from "../store/authContext";

const Login = ({ history }) => {
	const handleLogin = useCallback(
		async event => {
			event.preventDefault();
			const { email, password } = event.target.elements;
			try {
				await app.auth().signInWithEmailAndPassword(email.value, password.value);
				history.push("/");
			} catch (error) {
				alert(error);
			}
		},
		[history]
	);

	const { currentUser } = useContext(AuthContext);

	if (currentUser) {
		return <Redirect to="/" />;
	}

	return (
		<div className="container logInForm">
			<form className="text-center border border-dark p-5" onSubmit={handleLogin}>
				<p className="h4 mb-4 titleForm">Sign In</p>
				<input
					type="email"
					id="defaultLoginFormEmail"
					className="form-control mb-4"
					placeholder="Email"
					name="email"
				/>
				<input
					type="password"
					name="password"
					id="defaultLoginFormPassword"
					className="form-control mb-4"
					placeholder="Password"
				/>
				<button className="btn btn-info btn-block my-4" type="submit">
					Sign In
				</button>
				<Link
					to={{
						pathname: "/register"
					}}
					className="col-6 text-center text-decoration-none">
					<button className="btn btn-info btn-block ">Don&#39;t Have an Account? Sign Up Here</button>
				</Link>
			</form>
		</div>
	);
};

Login.propTypes = {
	history: PropTypes.any
};

export default withRouter(Login);

// let hasAccount = props.hasAccount;
// const history = useHistory();
// const { store, actions } = useContext(Context);

// //variables to hold user inputs
// const [name, setName] = useState("");
// const [last_name, setLast_name] = useState("");
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");

// //function to submit the sign Up form
// let handleSubmitSignUp = e => {
// 	//if the fields are empty return an alert message
// 	if (!name || !last_name || !email || !password) {
// 		alert("Please make sure all the fields are complete");
// 		return;
// 	}
// 	//if not, prevent the page from refreshing and call the function addUser from flux to add a new user to store
// 	e.preventDefault();
// 	let isSameEmail = actions.addUser(name, last_name, email, password);
// 	console.log(isSameEmail);

// 	//negate setHasAccount to render the signIn form
// 	if (!isSameEmail) {
// 		props.setHasAccount(!hasAccount);
// 	} else {
// 		setEmail("");
// 	}
// };

// //function to submit the sign in form
// let handleSubmitSignIn = e => {
// 	//if the fields are empty return an alert message
// 	if (!email || !password) {
// 		alert("Please make sure all the fields are complete");
// 		return;
// 	}
// 	//if not, prevent the page from refreshing and call the isUser function from flux to see if the user exists in the store
// 	e.preventDefault();
// 	let isUser = actions.isUser(email, password);

// 	//if the user does not exist, return an alert message. If the user exists, redirect the user's page.
// 	if (!isUser) {
// 		alert("User Name and Password Not Found. Please Try again or Sign Up");
// 	} else {
// 		//get the user ID
// 		let ID = actions.getUserID(isUser, email, password);
// 		let ID_String = ID.toString();
// 		//set logIN to true in sessionStorage
// 		sessionStorage.setItem("loggedIn", true);
// 		sessionStorage.setItem("ID", ID);
// 		console.log(sessionStorage);
// 		let isLoggedIn = sessionStorage.getItem("loggedIn");
// 		props.setLoggedIn(isLoggedIn);
// 		//redirect to user's page and hash the ID using md5
// 		let md5 = MD5(ID_String).toString();
// 		sessionStorage.setItem("md5", md5);
// 		//history.push(`/userPage/${MD5(ID_String).toString()}`);
// 		history.push("/");
// 		//we can also redirect using Redirect from react-router-dom
// 		//1. declare - 2. declare const redirect variable to false
// 		//- 3. create an arrow function to return a redirect component and the call tha function in the return of the main component

// 		//call the setID function from props to then pass it into the userpage component
// 		props.setID(ID);
// 	}
// };

// 	return (
// 		<div className="container logInForm">
// 			<div>
// 				<form className="text-center border border-dark p-5">
// 					<p className="h4 mb-4 titleForm">Sign in</p>

// 					<input
// 						type="email"
// 						id="defaultLoginFormEmail"
// 						className="form-control mb-4"
// 						placeholder="E-mail"
// 						name="email"
// 					/>

// 					<input
// 						type="password"
// 						id="defaultLoginFormPassword"
// 						className="form-control mb-4"
// 						placeholder="Password"
// 						name="password"
// 					/>
// 					<button className="btn btn-info btn-block my-4" type="submit">
// 						Sign in
// 					</button>
// 					<Link
// 						to={{
// 							pathname: "/register"
// 						}}
// 						className="col-6 text-center">
// 						<button className="btn btn-info pinkText loginCursor">
// 							Don&#39;t Have an Account? Sign Up Here
// 						</button>
// 					</Link>

// 					<p>or sign in with Google</p>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };

// // Login.propTypes = {
// // 	hasAccount: PropTypes.bool,
// // 	setHasAccount: PropTypes.func,
// // 	ID: PropTypes.number,
// // 	setID: PropTypes.func,
// // 	setLoggedIn: PropTypes.func,
// // 	setLoggedInWithGoogle: PropTypes.func
// // };
