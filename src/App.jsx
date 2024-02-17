import "./App.css";
import Header from "./components/common/heading/header";
import Home from "./components/Home/Home";
import React from "react";
// import { BrowserRouter as Router, Switch } from "react-router-dom";
// // react router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
