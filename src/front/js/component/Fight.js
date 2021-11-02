import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/demo.scss";
import { Context } from "../store/appContext";
import { Home } from "../pages/home";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

const Fight = props => {
	const { store, actions } = useContext(Context);
	const [spanX, setSpanX] = useState("Un " + props.namePokemon + " salvaje aparecio!");
	const [span1, setSpan1] = useState("Combate");
	const [span2, setSpan2] = useState("Atrapar");
	const [span3, setSpan3] = useState("Escapar");
	const [span4, setSpan4] = useState("");
	const [span5, setSpan5] = useState("");
	const [span6, setSpan6] = useState("");
	const [span7, setSpan7] = useState("");
	const [span8, setSpan8] = useState("");
	const [span9, setSpan9] = useState("");
	const [atrapar, setAtrapar] = useState(false);
	const [classAnimationPkemonVsAtrapar, setClassAnimationPkemonVsAtrapar] = useState("img-pokemon-vs");

	const [iniciFigth, setIniciFigth] = useState(0);
	const [pelea, setPelea] = useState(false);
	const [myLife, setMylife] = useState(50);
	const [yourLife, setYourlife] = useState(100);
	const [turn, setTurn] = useState("yo");
	const [ataque, setAtaque] = useState(false);

	const iniciCombat = () => {
		setSpan1("Combate");
		setSpan2("Atrapar");
		setSpan3("Escapar");
		setSpan4("");
		setSpan5("");
		setSpan6("");
		setSpan7("");
		setSpan8("");
		setSpan9("");
	};
	const combate = () => {
		setSpan1("Que pokemon eliges");
		setSpan2("");
		setSpan3("Atras");
		setSpan4(store.newPokemon.name.toUpperCase());
		setSpan5("");
		setSpan6("");
		setSpan7("");
		setSpan8("");
		setSpan9("");
	};

	const atrapa = () => {
		setAtrapar(true);
		setSpan1("");
		setSpan2("");
		setSpan3("");
		setSpan4("");
		setSpan5("");
		setSpan6("");
		setSpan7("");
		setSpan8("");
		setSpan9("");

		setTimeout(() => {
			setClassAnimationPkemonVsAtrapar("img-pokemon-pokeball");
		}, 2000);
		setTimeout(() => {
			setSpanX(props.namePokemon + " atrapado.");
			setSpan5("Ok");
		}, 3000);
	};

	const optionsAttackPokemon = () => {
		setSpan1("");
		setSpan2("");
		setSpan3("Atras");
		setSpan4("Ataque1");
		setSpan5("Ataque2");
		setSpan6("");
		setSpan7("Ataque3");
		setSpan8("Ataque4");
		setSpan9("");
		setAtaque(true);
	};

	const attack = () => {
		setSpanX(props.namePokemon + " uso ataque");
		if (turn == "yo") {
			setYourlife(yourLife - 30);
			if (yourLife < 0) setYourlife(0);

			setTimeout(() => {
				setMylife(myLife - 30);
				if (myLife < 0) setMylife(0);
				setTurn("yo");
			}, 1000);
		}
		if (turn == "tu") {
			setMylife(myLife - 30);
			if (myLife < 0) setMylife(0);

			setTimeout(() => {
				setYourlife(yourLife - 30);
				if (yourLife < 0) setYourlife(0);
			}, 1000);
		}
	};

	if (iniciFigth != 3) {
		return (
			<div className="container-fight">
				<div className="squares-black" />
				{setTimeout(() => {
					setIniciFigth(3);
					document.body.style = "background:white;";
				}, 3000)}
			</div>
		);
	} else {
		return (
			<Container className="container-batle mt-5">
				{store.figth == true ? (
					<>
						{/* POKEMON RIVAL + BARRA VIDA */}
						<Row className="row-batle-button">
							<Col xs lg="2"></Col>
							<Col xs lg="5" className="col-life-name">
								<div className="name-pokemon">{props.namePokemon.toUpperCase()}</div>
								<div className="life-barra">
									<div
										className="life-barra-dentro"
										style={yourLife < 0 ? { width: 0 + "%" } : { width: yourLife + "%" }}></div>
								</div>
							</Col>
							<Col className="text-center">
								<img className={classAnimationPkemonVsAtrapar} src={props.imgPokemon} />
							</Col>
						</Row>
						{/* ANIMACION POKEMON ATRAPADO */}
						{atrapar == true && (
							<img
								className="img-pokeball"
								src="https://cdn-icons-png.flaticon.com/512/361/361998.png"></img>
						)}
						<Row>
							<Col className="text-center">
								{/* IMG ASH O IMG MI POKEMON */}
								{pelea == false ? (
									<img
										className="ash-batle"
										src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/92/latest/20190124213052/Rojo_LGPE.png/200px-Rojo_LGPE.png"
									/>
								) : (
									<>
										<img className="ash-batle" src={store.newPokemon.sprites.back_default} />
									</>
								)}
							</Col>
							{/* NOMBRE MI POKEMON + BARRA VIDA */}
							{pelea == true && (
								<Col xs lg="5" className="col-life-name">
									<div className="name-pokemon">{props.namePokemon.toUpperCase()}</div>
									<div className="life-barra">
										<div
											className="life-barra-dentro"
											style={myLife < 0 ? { width: 0 + "%" } : { width: myLife + "%" }}></div>
									</div>
								</Col>
							)}

							<Col xs lg="2"></Col>
						</Row>
						<Row>
							<Col className="d-flex">
								{/* CONTENEDOR INFO1 */}
								<div className="container-info1 d-flex align-items-center">
									<p>{spanX}</p>
								</div>
								{/* CONTENEDOR INFO2 */}
								<div className="container-info2">
									<div className="d-flex justify-content-around text-center">
										{/* SPAN 1, 2, 3 */}
										<span onClick={() => combate()}>{span1}</span>
										<span onClick={() => atrapa()}>{span2}</span>
										<span
											onClick={() => {
												if (span3 == "Escapar") {
													setTimeout(function() {
														actions.huir();
													}, 3000);

													setSpanX(props.namePokemon + " te dejo escapar");
												} else if (span3 == "Atras") {
													iniciCombat();
												}
											}}>
											{span3}
										</span>
									</div>
									{/* SPAN 4, 5, 6 */}
									<div className="d-flex justify-content-around text-center">
										<span
											onClick={() => {
												if (ataque == true) {
													attack();
												}
												setPelea(true);
												optionsAttackPokemon();
											}}>
											{span4}
										</span>
										<span
											onClick={() => {
												span5 == "Ok" ? actions.huir() : setPelea(true);
												optionsAttackPokemon();
											}}>
											{span5}
										</span>
										<span
											onClick={() => {
												setPelea(true);
												optionsAttackPokemon();
											}}>
											{span6}
										</span>
									</div>
									{/* SPAN 7, 8, 9 */}
									<div className="d-flex justify-content-around text-center">
										<span
											onClick={() => {
												setPelea(true);
												optionsAttackPokemon();
											}}>
											{span7}
										</span>
										<span
											onClick={() => {
												setPelea(true);
												optionsAttackPokemon();
											}}>
											{span8}
										</span>
										<span
											onClick={() => {
												setPelea(true);
												optionsAttackPokemon();
											}}>
											{span9}
										</span>
									</div>
								</div>
							</Col>
						</Row>
					</>
				) : (
					<Home />
				)}

				{/* <Home />
				{store.figth = false */}
			</Container>
		);
	}
};

Fight.propTypes = {
	namePokemon: PropTypes,
	imgPokemon: PropTypes
};

export default Fight;
