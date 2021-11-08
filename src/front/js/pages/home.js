import React, { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Fight from "../component/Fight";
import { Container } from "react-bootstrap";

// import { Container } from "react-bootstrap";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [pokemon, setPokemon] = useState(undefined);
	const [numPokemon, setNumPokemon] = useState(undefined);
	const [className, setClassName] = useState("pokeball");
	const [up, setUp] = useState(0);
	const [left, setLeft] = useState(97);
	const [topPokemon, setTopPokemon] = useState(0);
	const [leftPokemon, setLeftPokemon] = useState(0);
	const [windowWidthHeigth, setWindowWidthHeigth] = useState({ width: undefined, heigth: undefined });

	console.log("width", windowWidthHeigth.width, "heigth", windowWidthHeigth.heigth);

	// TENEMOS EL ALTO Y ANCHO DE PANTALLA, DECIR QUE TOP Y LEFT DE MOVERSE EN PERSONA COMO MAXIMO Y MINIMO SEA WIDTHPANTALLA... Y LO MISMO EN HEIGTH
	document.body.style = "background: green;";

	useEffect(() => {
		actions.getPokemon();
		setWindowWidthHeigth({ width: window.innerWidth - 70, heigth: window.innerHeight - 70 });

		// setTopPokemon(window.innerHeight - 100);
		// setLeftPokemon(window.innerWidth - 100);
	}, []);

	useEffect(() => {}, [numPokemon]);

	let persona = useRef();
	const walk = e => {
		// const { style } = persona.current;
		console.log("aaaa", e.keyCode);
		console.log("eee", e.target.style);
		let positionWidthOAk = windowWidthHeigth.heigth / 5;
		if (e.keyCode == 40) {
			setUp(up + 5);
			if (up > windowWidthHeigth.heigth) setUp(windowWidthHeigth.heigth);
			if (up < 45 && left < 45) store.figth = true;
			if (up < positionWidthOAk + 50 && left > windowWidthHeigth.width - 80) {
				alert("siiii");
			}
		}
		if (e.keyCode == 38) {
			setUp(up - 5);
			if (up <= 0) setUp(0);
			if (up < 45 && left < 45) store.figth = true;
			if (up < positionWidthOAk + 50 && left > windowWidthHeigth.width - 80) {
				alert("siiii");
			}
		}
		if (e.keyCode == 39) {
			setLeft(left + 5);
			if (left > windowWidthHeigth.width) setLeft(windowWidthHeigth.width);
			if (up < 45 && left < 45) store.figth = true;
			if (up < positionWidthOAk + 50 && left > windowWidthHeigth.width - 80) {
				alert("siiii");
			}
		}
		if (e.keyCode == 37) {
			setLeft(left - 5);
			if (left <= 0) setLeft(0);
			if (up < 45 && left < 45) store.figth = true;
			if (up < positionWidthOAk + 50 && left > windowWidthHeigth.width - 80) {
				alert("siiii");
			}
		}
	};

	return (
		<Container>
			{store.figth == false ? (
				<>
					<div className="pokemon" style={{ top: topPokemon, left: leftPokemon }}>
						{store.newPokemon != undefined && <img src={store.newPokemon.sprites.front_default} />}
					</div>

					<div
						className="persona"
						style={{ top: up, left: left }}
						ref={persona}
						tabIndex="0"
						onKeyDown={walk}
					/>
					<div className="dr">
						<img
							className="dr-oak"
							style={{ top: windowWidthHeigth.heigth / 5, left: windowWidthHeigth.width - 50 }}
							src="https://cdn-icons-png.flaticon.com/512/921/921130.png"></img>
						<img
							className="pokeball-oak"
							style={{ top: windowWidthHeigth.heigth / 5, left: windowWidthHeigth.width - 50 }}
							src="https://cdn-icons.flaticon.com/png/512/1169/premium/1169608.png?token=exp=1636384035~hmac=74411602a81ebcef975867ba5ed1b9ba"></img>
					</div>
				</>
			) : (
				<Fight
					imgPokemon={store.newPokemon.sprites.other.dream_world.front_default}
					namePokemon={store.newPokemon.name}
				/>
			)}
		</Container>
	);
};
