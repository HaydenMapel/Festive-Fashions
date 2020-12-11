import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const About = () => {
	return (
		<div className="text-light container" id="aboutContainer">
			<h2 className="text-center p-4">Who Are We?</h2>
			<div className="px-4 pb-4">
				We are a group of web developers based in Miami, FL from a variety of backgrounds in customer service,
				food service, entertainment, and travel. What we have in common is a passion for design, holidays, and
				fashion! We are learning React, Bootstrap, Javascript, HTML5, CSS3 and Git version control to bring you
				the best quality store experience possible.
			</div>
			<h2 className=" text-center p-4">What Is Our Goal?</h2>
			<div className="px-4 pb-4">
				We want to provide our customers with a great selection of clothing for all seasons and occasions. Need
				a funny Christmas sweater for a party? Need a spooky Halloween shirt? Need a cute Valentine&#39;s Day
				gift for your loved one? Everyone loves the celebrating holidays and we want to help you do it in style!
				We aim to please and are always expanding our inventory so please feel free to contact us if you are
				looking for something specific and we do not have it.
			</div>
		</div>
	);
};
