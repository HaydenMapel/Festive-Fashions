import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./views/home";
import { ProductList } from "./views/productList";
import { ProductDetail } from "./views/productDetail";
import { Cart } from "./views/cart";
import { Login } from "./views/login";
import { Register } from "./views/register";
import { About } from "./views/about";
import { Contact } from "./views/contact";
import { UserPage } from "./views/userPage";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	let isLoggedIn = sessionStorage.getItem("loggedIn");
	const [loggedIn, setLoggedIn] = useState(isLoggedIn);
	console.log("this is loggedIn variable in layout with the value of sessionStorage before sing in");
	console.log(loggedIn);
	const [hasAccount, setHasAccount] = useState(false);
	const [ID, setID] = useState(null);
	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/product">
						<ProductList />
					</Route>
					<Route exact path="/product/1">
						<ProductDetail />
					</Route>
					<Route exact path="/cart">
						<Cart />
					</Route>
					<Route exact path="/login">
						<Login
							hasAccount={hasAccount}
							setHasAccount={setHasAccount}
							ID={ID}
							setID={setID}
							setLoggedIn={setLoggedIn}
						/>
					</Route>
					<Route exact path="/register">
						<Register />
					</Route>
					<Route exact path="/about">
						<About />
					</Route>
					<Route exact path="/contact">
						<Contact />
					</Route>
					<Route exact path="/userPage/:ID">
						<UserPage ID={ID} />
					</Route>
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
