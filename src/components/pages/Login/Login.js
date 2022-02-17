import React, { useEffect } from "react";
import "./Login.css";
import { auth, provider } from "../../../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth, isAuth }) => {
  let navigate = useNavigate();

  const signIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);

      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div className="login mt-16 bg-red-500">
      <div className="login1">
        <p>If Popup didn't show up. U can use this button</p>
        <button onClick={signIn}>Sign In</button>
      </div>
    </div>
  );
};

export default Login;
