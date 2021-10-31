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

	const [iniciFigth, setIniciFigth] = useState(0);
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
		setSpan4("pokemon1");
		setSpan5("");
		setSpan6("");
		setSpan7("");
		setSpan8("");
		setSpan9("");
	};
	const huir = () => {
		store.figth = false;
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
			<Container className="container-batle">
				{store.figth == true ? (
					<>
						<Row className="row-batle-button">
							<Col xs lg="2"></Col>
							<Col xs lg="5" className="col-life-name">
								<div className="name-pokemon">{props.namePokemon.toUpperCase()}</div>
								<div className="life-barra"></div>
							</Col>
							<Col className="text-center">
								<img className="img-pokemon-vs" src={props.imgPokemon} />
							</Col>
						</Row>
						<img
							className="img-pokeball"
							src="https://tiendafrikionline.com/wp-content/uploads/2020/11/alfombra-pokeball-pokemon.jpg"></img>
						<Row>
							<Col className="text-center">
								<img
									className="ash-batle"
									src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/92/latest/20190124213052/Rojo_LGPE.png/200px-Rojo_LGPE.png"
								/>
							</Col>
							<Col xs lg="5" className="col-life-name">
								<div className="name-pokemon">{props.namePokemon.toUpperCase()}</div>
								<div className="life-barra"></div>
							</Col>

							<Col xs lg="2"></Col>
						</Row>
						<Row>
							<Col className="d-flex">
								<div className="container-info1 d-flex align-items-center">
									<p>{spanX}</p>
								</div>
								<div className="container-info2">
									<div className="d-flex justify-content-around text-center">
										<span onClick={() => combate()}>{span1}</span>
										<span>{span2}</span>
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
									<div className="d-flex justify-content-around text-center">
										<span>{span4}</span>
										<span>{span5}</span>
										<span>{span6}</span>
									</div>
									<div className="d-flex justify-content-around text-center">
										<span onClick={() => combate()}>{span7}</span>
										<span>{span8}</span>
										<span>{span9}</span>
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
