import "./Register.scss";
import React, { useState } from "react";
import logo from "../../Images/amazon_logo.svg";
import { Link } from "react-router-dom";
import { auth } from "../../firebase-config";
import { useHistory } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register: React.FC = () => {
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpPasswordConfirm, setSignUpPasswordConfirm] = useState("");

  const history = useHistory();

  const clearFields = () => {
    setSignUpEmail("");
    setSignUpPassword("");
    setSignUpPasswordConfirm("");
  };

  const signUp = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      if (signUpPassword === signUpPasswordConfirm) {
        await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword);
        clearFields();
        history.push("/");
      } else {
        alert("Password and confirm password do not match");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div id="register" className="container">
      <img src={logo} alt="" className="lofo-img" />
      <div className="login-card">
        <div className="title">Create account</div>
        <form action="" onSubmit={signUp}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={signUpEmail}
            onChange={(e) => setSignUpEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={signUpPassword}
            onChange={(e) => setSignUpPassword(e.target.value)}
            placeholder="At least 6 characters"
          />
          <br />
          <label htmlFor="re-enter-password">Re-enter password</label>
          <input
            id="re-enter-password"
            type="password"
            value={signUpPasswordConfirm}
            onChange={(e) => setSignUpPasswordConfirm(e.target.value)}
            placeholder="At least 6 characters"
          />
          <br />

          <button className="btn-submit">Continue</button>
          <p>
            By creating an account, you agree to Amazon's Conditions of Use and
            Privacy Notice.
          </p>
        </form>
      </div>
      <div className="divider">
        <h5>
          Already have an account? <Link to="/login">Sign-In</Link>
        </h5>
      </div>
    </div>
  );
};

export default Register;
