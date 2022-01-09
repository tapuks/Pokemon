import React, { Component, useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Col, Row, Form, Button, Alert } from "react-bootstrap";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
import pokemonLetras from "../../img/letras-pokemon.png";
import { Context } from "../store/appContext";

const Login = () => {
	const history = useHistory();
	const { store, actions } = useContext(Context);

	const [step, setStep] = useState(2);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	document.body.style = "background: white;";

	if (step == 1) {
		return (
			<Container className="body-login">
				<div className="container-letras text-center">
					<img src={pokemonLetras}></img>
				</div>

				<Form className="mt-5">
					<Row>
						<Col md={4}></Col>
						<Col className="cool" md={4}>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>
									<strong>Email</strong>
								</Form.Label>
								<Form.Control
									onChange={e => setEmail(e.target.value)}
									className="input"
									type="email"
									placeholder="Enter email"
								/>
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col md={4}></Col>
						<Col className="cool" md={4}>
							<Form.Group className="mb-3" controlId="formBasicPassword">
								<Form.Label>
									<strong>Password</strong>
								</Form.Label>
								<Form.Control
									onChange={e => setPassword(e.target.value)}
									className="input"
									type="password"
									placeholder="Password"
								/>
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col md={4}></Col>
						<Col className="cool" md={4}>
							<Button
								onClick={e => {
									e.preventDefault();
									actions.sendLogin(email, password, history);
								}}
								className="submit"
								variant="primary"
								type="submit">
								Continuar partida
							</Button>
						</Col>
					</Row>
				</Form>
				<Row>
					<Col md={4}></Col>
					<Col className="cool" md={4}>
						<a
							onClick={() => {
								setStep(2);
								setEmail("");
								setPassword("");
							}}
							className="enlace">
							Registrarse
						</a>
					</Col>
				</Row>
				{store.alert == true && (
					<Row>
						<Col md={4}></Col>
						<Col className="cool" md={4}>
							<Alert variant="danger">Usuario o password incorrecto</Alert>
						</Col>
					</Row>
				)}
			</Container>
		);
	}

	if (step == 2) {
		return (
			<Container className="body-login">
				<div className="container-letras text-center">
					<img src={pokemonLetras}></img>
				</div>

				<Form className="mt-5">
					<Row>
						<Col md={4}></Col>
						<Col className="cool" md={4}>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>
									<strong>User</strong>
								</Form.Label>
								<Form.Control
									className="input"
									type="email"
									placeholder="Enter email"
									onChange={e => setUsername(e.target.value)}
								/>
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col md={4}></Col>
						<Col className="cool" md={4}>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>
									<strong>Email</strong>
								</Form.Label>
								<Form.Control
									className="input"
									type="email"
									placeholder="Enter email"
									onChange={e => setEmail(e.target.value)}
								/>
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col md={4}></Col>
						<Col className="cool" md={4}>
							<Form.Group className="mb-3" controlId="formBasicPassword">
								<Form.Label>
									<strong>Password</strong>
								</Form.Label>
								<Form.Control
									className="input"
									type="password"
									placeholder="Password"
									onChange={e => setPassword(e.target.value)}
								/>
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col md={4}></Col>
						<Col className="cool" md={4}>
							<Button
								className="submit"
								variant="primary"
								type="submit"
								onClick={e => {
									e.preventDefault();
									actions.sendRegister(email, password, username, history);
								}}>
								Registrarse
							</Button>
						</Col>
					</Row>
				</Form>
				<Row>
					<Col md={4}></Col>
					<Col className="cool" md={4}>
						<a
							onClick={() => {
								setStep(1);
								setEmail("");
								setPassword("");
							}}
							className="enlace">
							Continuar partida
						</a>
					</Col>
				</Row>

				<Row>
					<Col md={4}></Col>
					<Col className="cool" md={4}>
						{store.alertRegisterEmail != "" ? (
							<Alert variant="danger">Email: {store.alertRegisterEmail}</Alert>
						) : store.alertRegisterUsername != "" ? (
							<Alert variant="danger">Username: {store.alertRegisterUsername}</Alert>
						) : store.alertRegisterPassword != "" ? (
							<Alert variant="danger">Password: {store.alertRegisterPassword}</Alert>
						) : (
							""
						)}
					</Col>
				</Row>
			</Container>
		);
	}
};

export default Login;
