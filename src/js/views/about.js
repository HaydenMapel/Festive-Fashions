import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const About = () => {
	return (
		<div className="bg-dark text-light h-100">
			<div className="bg-secondary  h-50">
				<div className="container">
					<h2 className="text-center p-4">Who Are We?</h2>
					<div className="p-4">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum vestibulum mi et
						consectetur. Duis sollicitudin est at libero convallis, sit amet faucibus nulla viverra. Integer
						nec ex scelerisque, efficitur neque at, imperdiet lacus. Aliquam vulputate quis nisl non
						vestibulum. Cras ac justo vitae lacus congue consequat id a ipsum.
					</div>
				</div>
			</div>
			<div className="container h-50">
				<h2 className=" text-center p-4">This Is Who We Are</h2>
				<div className="p-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum vestibulum mi et consectetur.
					Duis sollicitudin est at libero convallis, sit amet faucibus nulla viverra. Integer nec ex
					scelerisque, efficitur neque at, imperdiet lacus. Aliquam vulputate quis nisl non vestibulum. Cras
					ac justo vitae lacus congue consequat id a ipsum.
				</div>
			</div>
			<div className="text-center">
				<Link to="/">
					<button className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</button>
				</Link>
			</div>
		</div>
	);
};
