import React, { useState } from "react";
import { useHistory } from "react-router";
import { Form, Button } from "react-bootstrap";
import LoginImage from "../img/login.svg.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { errors as errMsgs, messages as sucMsgs } from "../messages.json";


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const history = useHistory()
  const sendData = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, cpassword: cPassword }),
    });
    const data = await response.json();
    if (data["success"]) {
      toast(sucMsgs[data["message"]], {
        position: "bottom-right",
        autoClose: 7000,
        theme: "dark"
      });
      history.push('/login')
    }
    if (!data["success"]) {
      toast.error(errMsgs[data["error"]], {
        position: "bottom-right",
        autoClose: 7000,
        theme: "dark"
      });
    };
  };

  return (
    <>
      <section id="register__page">
        <div className="register__pageregister__page-svg">
          <LoginImage />
        </div>
        <div className="register__pageregister__page-form">
          <Form onSubmit={sendData}>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                className="register__page-form-inp form-inp-a"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="register__page-form-inp form-inp-a"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="register__page-form-inp form-inp-a"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                className="register__page-form-inp form-inp-a"
                value={cPassword}
                onChange={(e) => setCPassword(e.target.value)}
              />
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

export default Register;
