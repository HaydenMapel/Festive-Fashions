import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Contact = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid h-100 blackBG">
			<div className="container darkBG pb-5 pt-3 px-5 text-light m-4 border-primary text-center">
				<h2 className="text-center">Contact Us</h2>
				<form>
					<div className="form-group">
						<label htmlFor="contactFormControlInput1">Name</label>
						<input type="text" className="form-control" id="ContactName" />
					</div>
					<div className="form-group">
						<label htmlFor="contactFormControlInput2">Email address</label>
						<input type="email" className="form-control" id="ContactEmail" />
					</div>
					<div className="form-group">
						<label htmlFor="contactFormControlInput3">Subject</label>
						<input type="text" className="form-control" id="contactSubject" />
					</div>
					<div className="form-group">
						<label htmlFor="exampleFormControlTextarea1">Message</label>
						<textarea className="form-control" id="contactMessage" rows="5" />
					</div>
					<div className="text-center pt-3">
						<button className="btn btn-danger rounded-pill btn-block" type="submit">
							Submit form
						</button>
					</div>
				</form>
				{/* <div className="text-center">
					<Link to="/">
						<button className="btn btn-primary" href="#" role="button">
							Back home
						</button>
					</Link>
				</div> */}
			</div>
		</div>
	);
};
