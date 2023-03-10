import React, { useState } from "react";
import { loginUser } from "../../../redux/apiRequest";
import BackGround from "../../background/background";
import { useNavigate, Link } from "react-router-dom";

import Links from "../../Link/Link";

import "./LogIn.css";
import { useDispatch } from "react-redux";

const LogIn = () => {
  const [username, setUsername] = useState("huy");
  const [password, setPassword] = useState("112");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const handleLogin = (e) => {
    e.preventDefault();
    const newUser = {
      userName: username,
      password: password,
    };
    loginUser(newUser, dispatch, navigate);
  };

  return (
    <div className="login__background-container">
      <BackGround>
      <img id="login__logo" src={process.env.PUBLIC_URL + '/image/logotrv.png'} alt='logo'/>
       
        <form onSubmit={handleLogin}>
          <div className="login__background__input">
            <input
              placeholder="name"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
           
          </div>
          <div class="login__background__input">
           
          </div>
          <div className="login__link--password">
            <Link to={"/forgetPassword"}>
              <Links content="Forgot password?" />
            </Link>
          </div>
          {/* <Button type="submit" name={username} onSubmit>
            LOGIN
          </Button> */}
          <button type="submit">LOGIN</button>
        </form>
        <Link to={"/register"}>
          <Links content="Register ?" />
        </Link>
      </BackGround>
    </div>
  );
};

export default LogIn;
