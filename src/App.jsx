import "./App.css";
import About from "./components/About/About";
import Header from "./components/common/heading/header";
import Home from "./components/Home/Home";
import Pandp from "./components/P&p/P&p";
import Qlink from "./components/common/Qlink/Qlink";
import Contact from "./components/Contact/Contact";
import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/P&p" exact component={Pandp} />
          <Route path="/Qlink" exact component={Qlink} />
          <Route path="/Contact" exact component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
