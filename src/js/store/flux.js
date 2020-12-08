import { bool } from "prop-types";
//import MD5 from "crypto-js/md5";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			products: [
				{
					name: "First",
					price: 10.99,
					picture: "https://via.placeholder.com/150",
					short_description: "short1",
					long_description: "long1",
					ID: 1,
					season: "christmas"
				},
				{
					name: "Second",
					price: 11.99,
					picture: "https://via.placeholder.com/150",
					short_description: "short2",
					long_description: "long2",
					ID: 2,
					season: "christmas"
				},
				{
					name: "Third",
					price: 12.99,
					picture: "https://via.placeholder.com/150",
					short_description: "short3",
					long_description: "long3",
					ID: 3,
					season: "christmas"
				},
				{
					name: "Fourth",
					price: 13.99,
					picture: "https://via.placeholder.com/150",
					short_description: "short4",
					long_description: "long4",
					ID: 4,
					season: "christmas"
				},
				{
					name: "Fifth",
					price: 14.99,
					picture: "https://via.placeholder.com/150",
					short_description: "short5",
					long_description: "long5",
					ID: 5,
					season: "newyears"
				},
				{
					name: "Sixth",
					price: 15.99,
					picture: "https://via.placeholder.com/150",
					short_description: "short6",
					long_description: "long6",
					ID: 6,
					season: "newyears"
				},
				{
					name: "Seventh",
					price: 16.99,
					picture: "https://via.placeholder.com/150",
					short_description: "short7",
					long_description: "long7",
					ID: 7,
					season: "newyears"
				},
				{
					name: "Eigth",
					price: 17.99,
					picture: "https://via.placeholder.com/150",
					short_description: "short8",
					long_description: "long8",
					ID: 8,
					season: "newyears"
				},
				{
					name: "Ninth",
					price: 18.99,
					picture: "https://via.placeholder.com/150",
					short_description: "short9",
					long_description: "long9",
					ID: 9,
					season: "valentines"
				},
				{
					name: "Tenth",
					price: 19.99,
					picture: "https://via.placeholder.com/150",
					short_description: "short10",
					long_description: "long10",
					ID: 10,
					season: "valentines"
				},
				{
					name: "Eleventh",
					price: 20.99,
					picture: "https://via.placeholder.com/150",
					short_description: "short11",
					long_description: "long11",
					ID: 11,
					season: "valentines"
				},
				{
					name: "Twelfth",
					price: 21.99,
					picture: "https://via.placeholder.com/150",
					short_description: "short12",
					long_description: "long12",
					ID: 12,
					season: "valentines"
				}
			],
			users: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			getProducts: () => {
				return getStore().products;
			},
			getProduct: ID => {
				const products = getStore().products;
				ID = parseInt(ID);
				let product = {};

				products.forEach(element => {
					if (ID === element.ID) {
						product = element;
					}
				});

				return product;
			},

			//This function loads the data from the WordPress API
			loadLoginData: () => {
				let url =
					"https://8080-d98e4eed-9164-4d0c-baa2-d9b70a00edbf.ws-us02.gitpod.io/wp-json/sample_api/v1/userLogIn";
				fetch(url)
					.then(response => {
						if (response.status === 200) {
							return response.json();
						}
					})
					.then(jsonResponse => {
						// console.log(jsonResponse);
						let store = getStore();
						store.users = jsonResponse.users;
						setStore(store);
						// console.log(store);
					})
					.catch(error => {
						console.log(error);
					});
			},

			loadProductData: () => {
				let url =
					"https://8080-d98e4eed-9164-4d0c-baa2-d9b70a00edbf.ws-us02.gitpod.io//wp-json/sample_api/v1/product";
				fetch(url)
					.then(response => {
						if (response.status === 200) {
							return response.json();
						}
					})
					.then(jsonResponse => {
						// console.log(jsonResponse);
						let store = getStore();
						store.products = jsonResponse.products;
						setStore(store);
						// console.log(store);
					})
					.catch(error => {
						console.log(error);
					});
			},

			//Users functions
			getAllUsers: () => {
				return getStore().users;
			},
			getSingleUser: id => {
				const users = getStore().users;
				id = parseInt(id);
				let user = {};

				users.forEach(element => {
					if (id === element.ID) {
						user = element;
					}
				});
				//console.log(user);

				return user;
			},
			isUser: (email, password) => {
				//getActions.loadSomeData();
				const users = getStore().users;
				console.log(users);

				//id = parseInt(id);
				let user = false;

				users.forEach(element => {
					console.log(element.email);
					console.log(email);

					if (email === element.email && password === element.password) {
						// if (email === element.email) {
						user = true;
						return user;
					}
				});

				return user;
			},
			getUserID: (isUser, email, password) => {
				const users = getStore().users;
				let userID = 0;

				if (isUser) {
					users.forEach(element => {
						if (email === element.email && password === element.password) {
							// if (email === element.email) {

							userID = element.ID;
							console.log(userID);
							// return user;
						}
						// else {
						// 	userID = null;
						// }
					});
					console.log(userID);
					return userID;
				}
			},
			addUser: (name, last_name, email, password) => {
				//create a new user object
				let newUser = { post_title: name, name: name, last_name: last_name, email: email, password: password };
				//add a new user to database and return ID
				//let ID = getActions().addRemoteUser(newUser);
				let url =
					"https://8080-d98e4eed-9164-4d0c-baa2-d9b70a00edbf.ws-us02.gitpod.io/wp-json/sample_api/v1/userLogIn";

				const users = getStore().users;
				let isSameEmail = false;

				users.forEach(user => {
					if (email === user.email) {
						isSameEmail = true;
					}
				});

				if (isSameEmail) {
					alert("Please use another email!");
				} else {
					fetch(url, {
						method: "post",
						body: JSON.stringify(newUser)
					})
						.then(response => {
							if (response.status === 200) {
								return response.json();
							}
						})
						.then(jsonResponse => {
							// let str = jsonResponse.toString();
							// console.log(str);

							// console.log(MD5(str).toString());

							//the function to create a new user in the API returns the ID of the user created and that is what we are returning in the jsonResponse
							let ID = jsonResponse;

							//get the users from the store
							let store = getStore();
							//let usersLength = store.users.length;

							//add ID to LOCAL STORAGE
							localStorage.setItem(email, ID);
							console.log(localStorage);
							newUser.ID = ID;
							//add a new user to store
							store.users = [...store.users, newUser];
							// Updat the store
							setStore(store);
							console.log(store.users);
						})
						.catch(error => {
							console.log(error);
						});
				}
				console.log(isSameEmail);

				return isSameEmail;
			}
		}
	};
};

export default getState;
