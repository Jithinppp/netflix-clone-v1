import React, { useState } from "react";
import "./Login.style.css";
import logo from "../../assets/images/netflix-logo.png";
import SignInScreen from "../../components/SignInScreen/SignInScreen";

const Login = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="login__container">
      <nav className="login__navigation">
        <img src={logo} alt="logo" />
        {!signIn && (
          <button
            className="login__SignInButton"
            onClick={() => setSignIn(true)}
          >
            Sign In
          </button>
        )}
      </nav>

      <div className="login__formContainer">
        {signIn ? (
          <SignInScreen />
        ) : (
          <div className="login__primaryContainer">
            <h1 className="login__title">
              Unlimited films, TV programs and more.
            </h1>
            <h3 className="login__subtitle">
              Watch anywhere. Cancel at any time
            </h3>
            <h4 className="login__subtext">
              Ready to watch? enter your email to crate or restart your
              membership
            </h4>
            <form className="login__primaryForm">
              <input
                className="login__input"
                placeholder="Email address"
                type={"email"}
              />
              <button
                className="login__primaryGetStartedButton"
                onClick={() => setSignIn(true)}
              >
                GET STARTED
              </button>
            </form>
          </div>
        )}
      </div>
      <div className="login__gradient" />
    </div>
  );
};

export default Login;
