import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";


const ForgotPage = () => {
  return (
    <>
      <section id="forgot__page">
        <div className="forgot__page-wrapper">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Registered Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="form-inp-a forgot__page-emailInput"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <div className="login__page-submitBtn__wrapper">
              <Button
                variant="primary"
                type="submit"
                className="form-submitBtn form-inp-a"
              >
                Send Link
              </Button>
              <Link to="/login" className="form-link">Remember Password?</Link>
            </div>
          </Form>
        </div>
      </section>
    </>
  );
};

export default ForgotPage;
