import React, { useContext, useEffect, useState } from "react";
import app from "../base";
import PropTypes from "prop-types";

export const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		app.auth().onAuthStateChanged(user => {
			setCurrentUser(user);
			setLoading(false);
		});
	}, []);

	if (loading) {
		return <>Loading...</>;
	}

	return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
	children: PropTypes.node
};
