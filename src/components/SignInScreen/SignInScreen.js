import React, { useRef } from "react";
import { registerUser, signInUser } from "../../utils/firebase";

import "./SignInScreen.style.css";

const SignInScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const registerHandler = (e) => {
    e.preventDefault();
    registerUser(emailRef.current.value, passwordRef.current.value);
  };
  const signInHandler = (e) => {
    e.preventDefault();
    signInUser(emailRef.current.value, passwordRef.current.value);
  };
  return (
    <div className="form__secondaryContainer">
      <h1 className="form__title">Sign In</h1>
      <form className="form__secondary" onSubmit={signInHandler}>
        <input placeholder="Email" required ref={emailRef} />
        <input placeholder="Password" required ref={passwordRef} />
        <button type="submit">Sign In</button>
        <h4 className="form__secondaryBottomDescription">
          New to netflix? <span onClick={registerHandler}> Sign up now.</span>
        </h4>
      </form>
    </div>
  );
};

export default SignInScreen;
