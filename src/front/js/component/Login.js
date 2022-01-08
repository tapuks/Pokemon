import React, { Component, useState, useContext, useEffect } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
import pokemonLetras from "../../img/letras-pokemon.png";
import { Context } from "../store/appContext";

const Login = () => {
	const { store, actions } = useContext(Context);

	const [step, setStep] = useState(1);
	document.body.style = "background: white;";

	if (step == 1) {
		const [email, setEmail] = useState("");
		const [password, setPassword] = useState("");

		useEffect(() => {
			console.log(email);
			console.log("pass", password);
		}, [email, password]);

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
									actions.sendLogin(email, password);
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
						<a onClick={() => setStep(2)} className="enlace">
							Registrarse
						</a>
					</Col>
				</Row>
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
								<Form.Control className="input" type="email" placeholder="Enter email" />
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
								<Form.Control className="input" type="email" placeholder="Enter email" />
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
								<Form.Control className="input" type="password" placeholder="Password" />
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col md={4}></Col>
						<Col className="cool" md={4}>
							<Button className="submit" variant="primary" type="submit">
								Registrarse
							</Button>
						</Col>
					</Row>
				</Form>
				<Row>
					<Col md={4}></Col>
					<Col className="cool" md={4}>
						<a onClick={() => setStep(1)} className="enlace">
							Continuar partida
						</a>
					</Col>
				</Row>
			</Container>
		);
	}
};

export default Login;
