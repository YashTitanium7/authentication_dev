import { useState, useEffect } from "react";
import { ForgotPage, ResetPage, Home, Login, Register } from "./pages";
import { Navbar } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config.json";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [details, setDetails] = useState({});
  const [loginStatus, setLoginStatus] = useState(false);
  const getDetails = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    const details = jwt.verify(token, JWT_SECRET);
    setDetails(details);
    setLoginStatus(true);
  };
  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar loginStatus={loginStatus} getDetails={getDetails} />
        <Route path="/" exact>
          <Home details={details} />
        </Route>
        <Route path="/login" exact>
          <Login getDetails={getDetails} />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/forgotP" exact>
          <ForgotPage />
        </Route>
        <Route path="/resetP" exact>
          <ResetPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
