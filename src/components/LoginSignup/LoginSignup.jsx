import React, { useState } from "react";
import "./LoginSignup.css";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className="container">
      <div className="Header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
      {action === "Login" ? <div /> : (
  <div className="input">
    <img src="#" alt="" />
    <input type="Name" placeholder="Name" />
  </div>
)}
      
        {/* {action !== "Login" && (
          <div className="input">
            <img src="#" alt="" />
            <input type="Name" placeholder="Name" />
          </div>
        )} */}
        <div className="input">
          <img src="#" alt="" />
          <input type="Email" placeholder="Email" />
        </div>
       <div className="input">
          <img src="#" alt="" />
          <input type="Password" placeholder="Password" />
        </div>
        {action === "Sign Up" ? <div/> : <div className="forget-password">
          forgot Password? <span>Click Here!</span>
        </div>}
        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
