import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/demo.scss";
import { Context } from "../store/appContext";
import { Home } from "../pages/home";
import PropTypes from "prop-types";

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
			<div className="container-batle">
				<img
					className="ash-batle"
					src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/92/latest/20190124213052/Rojo_LGPE.png/200px-Rojo_LGPE.png"
				/>
				{/* <img src={props.imgPokemon} />
				<h1>{props.namePokemon}</h1> */}
				{/* <Home />
				{(store.figth = false)} */}
			</div>
		);
	}
};

Fight.propTypes = {
	namePokemon: PropTypes,
	imgPokemon: PropTypes
};

export default Fight;
