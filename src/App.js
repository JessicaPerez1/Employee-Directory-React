import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import NavBar from "./components/Navbar";

import "./App.css";
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Welcome} />
      </div>
    </Router>
  );
}

export default App;
