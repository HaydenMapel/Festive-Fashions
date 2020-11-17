import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Logo</span>
			</Link>
			<div className="ml-auto">
				<ul className="navUl">
					<li>
						<Link to="/about">
							<span className="navbar-brand mb-0 h1">home</span>
						</Link>
					</li>
					<li>
						<Link to="/about">
							<span className="navbar-brand mb-0 h1">About</span>
						</Link>
					</li>
					<li>
						<Link to="/about">
							<span className="navbar-brand mb-0 h1">Shop</span>
						</Link>
					</li>
				</ul>
				<div>
					<button>Login</button>
					<button>
						<i className="fas fa-shopping-cart" />
					</button>
				</div>
			</div>
		</nav>
	);
};
