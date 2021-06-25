import React from "react";
import "./App.css";

import ControlledUncontrolledComponent from "./pages/Controlled&Uncontrolled_Component";
import Hooks from "./pages/Hooks";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/ControlledUnControlledComponent">
                Controlled, UnControlled Component
              </Link>
            </li>
            <li>
              <Link to="/Hooks">Hooks</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
      <hr></hr>

      <Switch>
        <Route path="/ControlledUnControlledComponent">
          <ControlledUncontrolledComponent />
        </Route>
        <Route path="/Hooks">
          <Hooks />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return <h1>Home</h1>;
}

export default App;
