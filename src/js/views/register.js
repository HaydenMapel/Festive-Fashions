import React, { useCallback } from "react";
import { Link, withRouter } from "react-router-dom";
import app from "../base.js";
import PropTypes from "prop-types";

const Register = ({ history }) => {
	const handleSignUp = useCallback(
		async event => {
			event.preventDefault();
			const { email, password } = event.target.elements;
			try {
				await app.auth().createUserWithEmailAndPassword(email.value, password.value);
				history.push("/");
			} catch (error) {
				alert(error);
			}
		},
		[history]
	);

	return (
		<div className="container logInForm">
			<form className="text-center border border-dark p-5" onSubmit={handleSignUp}>
				<p className="h4 mb-4 titleForm">Sign Up</p>
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
				<input
					type="password"
					name="passwordConfirm"
					id="defaultLoginFormPasswordConfirm"
					className="form-control mb-4"
					placeholder="Confirm Password"
				/>

				<button className="btn btn-info btn-block my-4" type="submit">
					Sign Up
				</button>
				<Link
					to={{
						pathname: "/login"
					}}
					className="col-6 text-center text-decoration-none">
					<button className="btn btn-info btn-block ">Already Have an Account? Login Here</button>
				</Link>
			</form>
		</div>
	);
};

Register.propTypes = {
	history: PropTypes.any
};

export default withRouter(Register);
