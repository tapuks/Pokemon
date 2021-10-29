git remote add origin https://github.com/tapuks/Pokemon.git
import React, { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [pokemon, setPokemon] = useState(undefined);
	const [numPokemon, setNumPokemon] = useState(undefined);
	const [className, setClassName] = useState("pokeball");
	const [up, setUp] = useState(0);
	const [left, setLeft] = useState(0);
	const [topPokemon, setTopPokemon] = useState(0);
	const [leftPokemon, setLeftPokemon] = useState(0);
	const [windowWidthHeigth, setWindowWidthHeigth] = useState({ width: undefined, heigth: undefined });
	console.log("width", windowWidthHeigth.width, "heigth", windowWidthHeigth.heigth);

	// TENEMOS EL ALTO Y ANCHO DE PANTALLA, DECIR QUE TOP Y LEFT DE MOVERSE EN PERSONA COMO MAXIMO Y MINIMO SEA WIDTHPANTALLA... Y LO MISMO EN HEIGTH

	useEffect(() => {
		setNumPokemon(Math.floor(Math.random() * (152 - 1) + 1));
		console.log("num", numPokemon);
		setWindowWidthHeigth({ width: window.innerWidth, heigth: window.innerHeight });
		// setTopPokemon(window.innerHeight - 100);
		// setLeftPokemon(window.innerWidth - 100);
	}, []);

	useEffect(
		() => {
			var myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");

			// var raw = " \r\n    [{label: \"madrid\", done: true }]\r\n    \r\n  ";

			var requestOptions = {
				method: "GET",
				headers: myHeaders,
				//   body: raw,
				redirect: "follow"
			};

			fetch("https://pokeapi.co/api/v2/pokemon/" + numPokemon, requestOptions)
				.then(response => response.json())
				.then(result => {
					console.log(result);
					setPokemon(result);
				})
				.catch(error => console.log("error", error));
		},
		[numPokemon]
	);

	let persona = useRef();
	const walk = e => {
		// const { style } = persona.current;
		console.log("aaaa", e.keyCode);
		console.log("eee", e.target.style);
		if (e.keyCode == 40) {
			setUp(up + 5);
		}
		if (e.keyCode == 38) {
			setUp(up - 5);
		}
		if (e.keyCode == 39) {
			setLeft(left + 5);
		}
		if (e.keyCode == 37) {
			setLeft(left - 5);
		}
	};

	return (
		<>
			<div className="pokemon" style={{ top: topPokemon, left: leftPokemon }}>
				{pokemon != undefined && (
					<img src={pokemon.sprites.front_default} />
					// ) : (
					// 	<span className="span">
					// 		pokemon
					// 		<span />
					// 	</span>
				)}
			</div>

			{/* <div className="center">
				<div className={className}>
					<div
						className="contenido"
						onClick={() => {
							// newPokemon();
							setClassName("pokeball-animation");
						}}
					/>
				</div>
			</div> */}
			{/* <button onClick={() => setClassName("pokeball")}>boton</button> */}
			<div className="persona" style={{ top: up, left: left }} ref={persona} tabIndex="0" onKeyDown={walk} />
		</>
	);
};
