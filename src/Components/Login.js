import React from "react";
import "./Login.css";
import { auth, provider } from "../Firebase/config";
import { Button } from "@material-ui/core";

export default function Login() {
  function login() {
    auth.signInWithRedirect(provider);
  }
  return (
    <div className="app">
      <div className="login">
        <div className="login__container">
          <img src="public/instalogo.png" alt="" />
          <div className="login__text">
            <h1>Sign in KaselGram</h1>
          </div>
          <Button className="button" onClick={login}>
            Sign in With Google
          </Button>
        </div>
      </div>
    </div>
  );
}
