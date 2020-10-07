import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "../firebase/Config";
import { actionTypes } from "../context/reducer";
import { useStateContext } from "../context/StateContext";

const Login = () => {
  const [state, dispatch] = useStateContext();
  // Functinos
  const SignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((res) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: res.user,
        });
        console.log(res);
      })
      .catch((err) => prompt(err.message));
  };

  return (
    <div className="login">
      <div className="login__images">
        <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=120&h=120" />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          style={{ width: 200 }}
        />
      </div>
      <form>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={SignIn}
          className="login__btn"
        >
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default Login;
