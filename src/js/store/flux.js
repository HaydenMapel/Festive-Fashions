import { bool } from "prop-types";
//import MD5 from "crypto-js/md5";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			products: [
				{
					name: "Christmas Tree",
					price: 10.99,
					picture:
						"https://i5.walmartimages.com/asr/ce2c5382-67f8-4297-b651-b1848678baae_1.1a8c73ae11c3b5565d4a5f1dd8249483.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff",
					short_description: "Woman's Christmas Tree T-shirt in Grey",
					long_description:
						"Adult Women's Christmas Tree T-shirt. 100% Cotton. Grey. Shortsleeve. Made in the USA. Machine-washable. Available in sizes small to extra-large.",
					ID: 1,
					season: "christmas"
				},
				{
					name: "Tried My Best",
					price: 11.99,
					picture:
						"https://i5.walmartimages.com/asr/963c9988-5cd7-4c7d-a185-f63fdd7a0eeb_1.8cbefb4f685cca040c9f8f3804b417f5.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff",
					short_description: "Unisex Tried My Best T-shirt in Red",
					long_description:
						"Unisex Tried My Best T-shirt. 100% Cotton. Red. Shortsleeve. Made in the USA. Machine-washable. Available in sizes small to extra-large.",
					ID: 2,
					season: "christmas"
				},
				{
					name: "Christmas Sweater T-Shirt",
					price: 12.99,
					picture:
						"https://i5.walmartimages.com/asr/3febb163-a1f3-4964-b87f-d5ead987d7fc_1.d619cbd0140a874f4d8d6dcdea72a03f.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff",
					short_description: "Women's Christmas Sweater T-shirt in Red",
					long_description:
						"Adult Women's Christmas Tree T-shirt. 100% Cotton. Red. Shortsleeve. Made in the USA. Machine-washable. Available in sizes small to extra-large.",
					ID: 3,
					season: "christmas"
				},
				{
					name: "Ho Ho Ho Yall",
					price: 13.99,
					picture:
						"https://i5.walmartimages.com/asr/f34b6353-f8f1-4435-af3e-7098850bb120_1.8ee0faec12f225ca8d10e5c57f4fe6ce.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
					short_description: "Men's Ho Ho Ho Yall T-shirt in Grey",
					long_description:
						"Adult Men's Ho Ho Ho Yall T-shirt. 100% Cotton. Grey. Shortsleeve. Made in the USA. Machine-washable. Available in sizes small to extra-large.",
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
					"https://8080-ad6fc485-eff3-4cd8-bdfe-28bbca13c6e7.ws-us03.gitpod.io/wp-json/sample_api/v1/userLogIn";
				// "https://8080-d98e4eed-9164-4d0c-baa2-d9b70a00edbf.ws-us02.gitpod.io/wp-json/sample_api/v1/userLogIn";
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
					"https://8080-ad6fc485-eff3-4cd8-bdfe-28bbca13c6e7.ws-us03.gitpod.io/wp-json/sample_api/v1/product";
				// "https://8080-d98e4eed-9164-4d0c-baa2-d9b70a00edbf.ws-us02.gitpod.io//wp-json/sample_api/v1/product";
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
					"https://8080-ad6fc485-eff3-4cd8-bdfe-28bbca13c6e7.ws-us03.gitpod.io/wp-json/sample_api/v1/userLogIn";
				//"https://8080-d98e4eed-9164-4d0c-baa2-d9b70a00edbf.ws-us02.gitpod.io/wp-json/sample_api/v1/userLogIn";

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
