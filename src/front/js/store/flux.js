const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			newPokemon: undefined,
			figth: false
		},

		actions: {
			getPokemon: () => {
				let numPokemon = Math.floor(Math.random() * (152 - 1) + 1);
				console.log("num", numPokemon);
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};

				fetch("https://pokeapi.co/api/v2/pokemon/" + numPokemon, requestOptions)
					.then(response => response.json())
					.then(result => {
						console.log(result);
						setStore({ newPokemon: result });
					})
					.catch(error => console.log("error", error));
			},

			huir: () => {
				setStore({ figth: false });
			},

			sendLogin: (email, password) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					email: email,
					password: password
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch("http://127.0.0.1:8000/api/auth/token/", requestOptions)
					.then(response => response.json())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
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
