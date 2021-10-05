import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../Firebase/config";
import { IconButton } from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";

const Title = () => {
  function signOut() {
    auth.signOut();
  }

  return (
    <div className="title">
      <h1>kasel-Gram</h1>
      <div className="nav-bar">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>Home</h1>
        </Link>
        <IconButton>
          <ExitToApp onClick={signOut} />
        </IconButton>
        <Link to="/explore" style={{ textDecoration: "none" }}>
          <h1>Explore</h1>
        </Link>
      </div>
      <hr />
    </div>
  );
};

export default Title;
