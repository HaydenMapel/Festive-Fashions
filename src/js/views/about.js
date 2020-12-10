import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const About = () => {
	return (
		<div className="text-light blackBG" id="AboutMain">
			<div className="darkBG" id="AboutSecondary">
				<div className="container">
					<h2 className="text-center p-4">Who Are We?</h2>
					<div className="px-4 pb-4">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum vestibulum mi et
						consectetur. Duis sollicitudin est at libero convallis, sit amet faucibus nulla viverra. Integer
						nec ex scelerisque, efficitur neque at, imperdiet lacus. Aliquam vulputate quis nisl non
						vestibulum. Cras ac justo vitae lacus congue consequat id a ipsum.
					</div>
				</div>
			</div>
			<div className="container">
				<h2 className=" text-center p-4">This Is Who We Are</h2>
				<div className="px-4 pb-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum vestibulum mi et consectetur.
					Duis sollicitudin est at libero convallis, sit amet faucibus nulla viverra. Integer nec ex
					scelerisque, efficitur neque at, imperdiet lacus. Aliquam vulputate quis nisl non vestibulum. Cras
					ac justo vitae lacus congue consequat id a ipsum.
				</div>
			</div>
		</div>
	);
};
