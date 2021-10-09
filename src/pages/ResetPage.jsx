import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../css/resetPage.css";

const ResetPage = () => {
  return (
    <>
      <section id="reset__page">
        <div className="reset__page-wrapper">
          <h3>Reset your password for</h3>
          <p>vemuyaswanth@gmail.com</p>
          <Form>
            <Form.Group className="mb-3" controlId="newPassword">
              <Form.Control
                type="password"
                placeholder="Enter password"
                className="form-inp-a reset__page-input"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="newPassword2">
              <Form.Control
                type="password"
                placeholder="Re-enter password"
                className="form-inp-a reset__page-input"
              />
            </Form.Group>
            <div className="login__page-submitBtn__wrapper">
              <Button
                variant="primary"
                type="submit"
                className="form-submitBtn form-inp-a"
              >
                Send Link
              </Button>
              <Link to="/login" className="form-link">
                Go back
              </Link>
            </div>
          </Form>
        </div>
      </section>
    </>
  );
};

export default ResetPage;
