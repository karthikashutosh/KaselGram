import React from "react";
import { Link } from "react-router-dom";
import Darkmode from "../Components/Darkmode";

const Title = () => {
  return (
    <div className="title">
      <h1>kasel-Gram</h1>
      <div className="nav-bar">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>Home</h1>
        </Link>
        <Darkmode />
        <Link to="/explore" style={{ textDecoration: "none" }}>
          <h1>Explore</h1>
        </Link>
      </div>
      <hr />
    </div>
  );
};

export default Title;
