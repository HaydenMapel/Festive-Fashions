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
					id: 1
				},
				{
					name: "Second",
					price: 11.99,
					picture: "https://via.placeholder.com/150",
					short_description: "short2",
					long_description: "long2",
					id: 2
				},
				{
					name: "Third",
					price: 12.99,
					picture: "https://via.placeholder.com/150",
					short_description: "short3",
					long_description: "long3",
					id: 3
				},
				{
					name: "Fourth",
					price: 13.99,
					picture: "https://via.placeholder.com/150",
					short_description: "short4",
					long_description: "long4",
					id: 4
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			getProducts: () => {
				return getStore().products;
			},
			getProduct: id => {
				const products = getStore().products;
				id = parseInt(id);
				let product = {};

				products.forEach(element => {
					if (id === element.id) {
						product = element;
					}
				});

				return product;
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
