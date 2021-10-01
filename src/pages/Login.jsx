import React, { useState } from "react";
import { useHistory } from "react-router";
import LoginImage from "../img/login.svg.js";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { errors as errMsgs, messages as sucMsgs } from "../messages.json";

toast.configure()
const Login = ({ getDetails }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory()
  const sendData = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (data["success"]) {
      toast(sucMsgs[data["message"]], {
        position: "bottom-right",
        autoClose: 7000,
        theme: "dark"
      });
      localStorage.setItem("token", data["token"]);
      history.push('/')
      getDetails()
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
                className="login__page-form-inp form-inp-a"
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
                className="login__page-form-inp form-inp-a"
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
              className="login__page-form-submiBtn form-inp-a"
            >
              Submit
            </Button>
          </Form>
        </div>
      </section>
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
    </>
  );
};

export default Login;
