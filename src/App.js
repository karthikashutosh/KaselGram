import React from "react";

import Explore from "./Pages/Explore";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Title from "./Components/Title";
import Login from "./Components/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./Firebase/config";

function App() {
  const [user] = useAuthState(auth);

  if (!user) {
    return <Login />;
  }

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
