import React from "react";

import Explore from "./Pages/Explore";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Title from "./Components/Title";

function App() {
  return (
    <div className="App">
      <Router>
        <Title />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/explore">
            <Explore />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
