import React from "react";
import "./login.css";
import googleIcon from "../../assets/devicongoogle.png";
import FacebockIcon from "../../assets/logofacebook.png";
import line from "../../assets/line.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <div className="logo">EgyBusiness.ae</div>
      <div className="login-left">
        <h2>Log in to your account</h2>
        <p>Welcome back select method to login</p>
        <div className="social-login">
          <button className="google-btn">
            {" "}
            <img src={googleIcon} /> <span>Google</span>
          </button>
          <button className="facebook-btn">
            {" "}
            <img src={FacebockIcon} /> <span>Google</span>
          </button>
        
        </div>
        <img src={line} className="or" alt="" />

        <p className="or">Or</p>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <p className="forgot-password">Forgot your password?</p>
          <button type="submit" className="login-btn">
            Log in
          </button>
        </form>
      </div>
      <div className="login-right">
        <h2>Welcome back</h2>
        <p>Don't have an account?</p>
        <Link to={"/signUp"}> 
                <button className="signup-btn"> Sign up </button>
              </Link>
      </div>
    </div>
  );
};

export default Login;
