import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Contact = () => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	function sendEmail(e) {
		e.preventDefault();

		let templateParams = {
			from_name: name,
			reply_to: email,
			subject: subject,
			message: message
		};

		// info for emailjs verification
		emailjs.send("service_72uiiku", "template_b62hw5i", templateParams, "user_livOtwA3ThXGO7bbt4ixB").then(
			result => {
				console.log(result.text);
				alert("Message Sent!");
			},
			error => {
				console.log(error.text);
			}
		);
		setName("");
		setEmail("");
		setSubject("");
		setMessage("");
	}

	return (
		<div className="container-fluid h-100 blackBG">
			<div className="container pb-5 pt-3 px-5 text-light m-5 mx-auto">
				<h2 className="text-center pinkText">Contact Us</h2>
				<form onSubmit={sendEmail} className="mx-5">
					<div className="form-group">
						<label>Name</label>
						<input
							type="text"
							className="form-control"
							id="ContactName"
							value={name}
							onChange={e => setName(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Email address</label>
						<input
							type="email"
							className="form-control"
							id="ContactEmail"
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Subject</label>
						<input
							type="text"
							className="form-control"
							id="contactSubject"
							value={subject}
							onChange={e => setSubject(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Message</label>
						<textarea
							className="form-control"
							id="contactMessage"
							rows="5"
							value={message}
							onChange={e => setMessage(e.target.value)}
						/>
					</div>
					<button className="mt-4 btn btn-info rounded-pill btn-block mx-auto" type="submit">
						Submit form
					</button>
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
