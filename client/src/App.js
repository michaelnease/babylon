import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Character from "./pages/character";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/character/:id">
          <Character />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
