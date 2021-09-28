import React, { useState } from "react";
import LoginImage from "../img/login.svg.js";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendData = async (e) => {
    e.preventDefault();
    console.log({ email, password });

    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = response.json();
    console.log(data);
  };

  return (
    <>
      <section id="login__page">
        <div className="login__page-svg">
          <LoginImage />
        </div>
        <div className="login__page-form">
          <Form onSubmit={sendData}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="login__page-form-inp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="login__page-form-inp"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remeber me" />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="login__page-form-submiBtn"
            >
              Submit
            </Button>
          </Form>
        </div>
      </section>
    </>
  );
};

export default Login;
