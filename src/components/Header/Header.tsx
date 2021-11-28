import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";

const Header: React.FunctionComponent = () => {
  const [{ basket, user }] = useStateValue();
  const history = useHistory();

  const logOut = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    signOut(auth);
    history.push("/login");
  };

  return (
    <nav className="nav">
      <div className="nav-wrapper container">
        <Link className="logo" to="/">
          <img src={logo} alt="amazon-logo" />
        </Link>
        <div className="search-input">
          <input type="text" />
          <i className="fas fa-search"></i>
        </div>
        <div className="other">
          {user ? (
            <Link className="login-user" to="/checkout">
              <div className="user">
                <h6>Hello, {user.email}</h6>
                <h5>Account & Lists</h5>
              </div>
            </Link>
          ) : (
            <Link className="login-user" to="/login">
              <div className="user">
                <h6>Hello, Sign in</h6>
                <h5>Account & Lists</h5>
              </div>
            </Link>
          )}

          {user && (
            <div className="order">
              <h6 onClick={logOut}>Logout</h6>
            </div>
          )}

          <div className="order">
            <h6>Returns</h6>
            <h5>& Orders</h5>
          </div>
          <Link to="/checkout" className="checkout">
            <i className="fas fa-shopping-cart"></i>
            <div className="count">{basket?.length ? basket.length : 0}</div>
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
