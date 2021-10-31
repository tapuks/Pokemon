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

	const [iniciFigth, setIniciFigth] = useState(0);
	const combate = () => {
		setSpan1("Que pokemon Eliges");
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
							<div className="d-flex justify-content-around">
								<span onClick={() => combate()}>{span1}</span>
								<span>{span2}</span>
								<span>{span2}</span>
							</div>
							<div className="d-flex justify-content-around">
								<span onClick={() => combate()}>{span1}</span>
								<span>{span2}</span>
								<span>{span2}</span>
							</div>
							<div className="d-flex justify-content-around">
								<span onClick={() => combate()}>{span1}</span>
								<span>{span2}</span>
								<span>{span2}</span>
							</div>
						</div>
					</Col>
				</Row>

				{/* <Home />
				{(store.figth = false)} */}
			</Container>
		);
	}
};

Fight.propTypes = {
	namePokemon: PropTypes,
	imgPokemon: PropTypes
};

export default Fight;
