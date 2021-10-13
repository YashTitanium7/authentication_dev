import jwt from "jsonwebtoken";
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useParams, useHistory } from "react-router-dom";
import { ClipLoader } from "react-spinners"
import { errors as errMsgs, messages as sucMsgs } from "../messages.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../css/resetPage.css";

const ResetPage = () => {
  const [detailsFT, setDetails] = useState({});
  const [tokenV, setTokenV] = useState(false);
  const [password, setPassword] = useState("")
  const [cpassword, setCPassword] = useState("")
  const [id, setId] = useState("")
  const [loading, setLoading] = useState(false)
  const { token } = useParams();
  const history = useHistory()

  const verifyLink = () => {
    if (!token) return;
    try {
      const decoded = jwt.decode(token, {complete: true})
      if(!decoded) return new Error("Broken Link");
      console.log(decoded.payload)
      const pstring = decoded.payload['pstring']
      console.log(pstring)
      const JWT_SECRET = process.env.REACT_APP_JWT_SECRET + pstring
      const details = jwt.verify(token, JWT_SECRET)
      setDetails(details);
      setTokenV(true);
      setId(decoded.payload['id'])
    } catch (error) {
      console.error("Broken Link")
    }
  };

  const sendData = async(e) => {
    setLoading(true)
    e.preventDefault()
    const domain = process.env.REACT_APP_DOMAIN_ADDR || "http://localhost:5000"
    const response = await fetch(`${domain}/api/resetPassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify({ password, cpassword, id })
    })
    const data = await response.json()
    setLoading(false)
    if (data["success"]) {
      toast(sucMsgs[data["message"]], {
        position: "bottom-right",
        autoClose: 7000,
        theme: "dark",
      });
      history.push('/login')
    }
    if (!data["success"]) {
      toast.error(errMsgs[data["error"]], {
        position: "bottom-right",
        autoClose: 7000,
        theme: "dark",
      });
    }
  }
  
  useEffect(() => {
    verifyLink();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <section id="reset__page">
        <div className="reset__page-wrapper">
          {tokenV ? (
            <>
              <h3>Reset your password for</h3>
              <p>{detailsFT.email}</p>
              <Form onSubmit={sendData}>
                <Form.Group className="mb-3" controlId="newPassword">
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    className="form-inp-a reset__page-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="newPassword2">
                  <Form.Control
                    type="password"
                    placeholder="Re-enter password"
                    className="form-inp-a reset__page-input"
                    value={cpassword}
                    onChange={(e) => setCPassword(e.target.value)}
                  />
                </Form.Group>
                <div className="login__page-submitBtn__wrapper">
                  <Button
                    variant="primary"
                    type="submit"
                    className="form-submitBtn form-inp-a"
                    disabled={loading ?true :false}
                  >
                    Send Link
                    <ClipLoader color={"#fff"} loading={loading} size={10} />
                  </Button>
                  <Link to="/login" className="form-link">
                    Go back
                  </Link>
                </div>
              </Form>
            </>
          ) : (
            <h3>This link is broken!</h3>
          )}
        </div>
      </section>
    </>
  );
};

export default ResetPage;
