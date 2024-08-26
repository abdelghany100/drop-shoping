import React from "react";
import "./signUp.css";
import { IoLogoGoogle } from "react-icons/io";
import googleIcon from "../../assets/devicongoogle.png";
import FacebockIcon from "../../assets/logofacebook.png";
import line from "../../assets/line.png";
import { Link } from "react-router-dom";
const signUp = () => {
  return (
    <>
      <div className="signUp">
        <div className="container">
          <div className="left">
            <div className="logo">EgyBusiness.ae</div>
            <div className="content">
              <h4>Create Account</h4>

              <p>Welcome select method to Sign up</p>
              <div className="social">
                <button>
                  {" "}
                  <img src={googleIcon} /> <span>Google</span>
                </button>
                <button>
                  {" "}
                  <img src={FacebockIcon} /> <span>Google</span>
                </button>
              </div>
              <img src={line} className="line" alt="" />

              <form action="">
                <input type="text" placeholder="Name*" />
                <input type="text" placeholder="Email*" />
                <input type="password" placeholder="Password*" />
                <input type="password" placeholder="Confirm your password*" />
                <button>Sign up</button>
              </form>
            </div>
          </div>
          <div className="right">
            <div className="content">
              <h5>Wellcome</h5>
              <p>You have an account?</p>
              <Link to={"/login"}> 
                <button> Login </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default signUp;
