import "./Login.scss";
import logo from "../../Images/amazon_logo.svg";
import { Link } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Login: React.FC = () => {
  const history = useHistory();

  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const clearFields = () => {
    setSignInEmail("");
    setSignInPassword("");
  };

  const signIn = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, signInEmail, signInPassword);
      clearFields();
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div id="login" className="container">
      <img src={logo} alt="" className="lofo-img" />
      <div className="login-card">
        <div className="title">Sign-In</div>
        <form onSubmit={signIn} action="">
          <label htmlFor="email">Email</label>
          <input
            value={signInEmail}
            onChange={(e) => setSignInEmail(e.target.value)}
            type="email"
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            value={signInPassword}
            onChange={(e) => setSignInPassword(e.target.value)}
            type="password"
            placeholder="At least 6 characters"
          />
          <button className="btn-submit">Continue</button>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
        </form>
      </div>
      <div className="divider">
        <h5>New to Amazon?</h5>
      </div>

      <Link className="logo" to="/register">
        <button className="btn-submit">Create your Amazon account</button>
      </Link>
    </div>
  );
};

export default Login;
