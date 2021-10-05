import React from "react";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <div className="title">
      <h1>kasel-Gram</h1>
      <div className="nav-bar" >
        <Link to="/"style={{textDecoration:"none"}}><h1>Home</h1></Link>
        {/* <Darkmode /> */}
        <h1>Dark mode</h1>
        <Link to="/explore" style={{textDecoration:"none"}}><h1>Explore</h1></Link>
      </div>
      <hr />
    </div>
  );
};

export default Title;
