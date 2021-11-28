import Home from "../Home/Home";
import Checkout from "../Checkout/Checkout";
import "./App.scss";
import { Route } from "react-router-dom";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { useEffect } from "react";
import { auth } from "../../firebase-config";
import { useStateValue } from "../../StateProvider";

const App: React.FunctionComponent = () => {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: "SET_USER", payload: authUser });
        console.log(authUser);
      } else {
        dispatch({ type: "SET_USER", payload: null });
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Header />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/checkout">
        <Checkout />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </>
  );
};

export default App;
