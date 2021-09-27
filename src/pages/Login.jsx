import React from "react";
import LoginImage from "../img/login.svg.js";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <>
      <section id="login__page">
        <div className="login__page-svg">
          <LoginImage />
        </div>
        <div className="login__page-form">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" className="login__page-form-inp" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"  className="login__page-form-inp" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remeber me" />
            </Form.Group>
            <Button variant="primary" type="submit" className="login__page-form-submiBtn">
              Submit
            </Button>
          </Form>
        </div>
      </section>
    </>
  );
};

export default Login;
