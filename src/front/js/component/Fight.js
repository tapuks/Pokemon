import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/demo.scss";
import { Context } from "../store/appContext";
import { Home } from "../pages/home";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

const Fight = props => {
	const { store, actions } = useContext(Context);

	const [iniciFigth, setIniciFigth] = useState(0);

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
						<div className="container-info1">
							<p>Un {props.namePokemon} salvaje aparecio!</p>
						</div>
						<div className="container-info2 d-flex justify-content-around">
							<span>Combate</span>
							<span>Atrapar</span>
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
