import { ForgotPage, ResetPage, Home, Login, Register } from "./pages";
import { Navbar } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Route path="/" exact><Home /></Route>
        <Route path="/login" exact><Login /></Route>
        <Route path="/register" exact><Register /></Route>
        <Route path="/forgotP" exact><ForgotPage /></Route>
        <Route path="/resetP" exact><ResetPage /></Route>
      </Router>
    </div>
  );
}

export default App;
