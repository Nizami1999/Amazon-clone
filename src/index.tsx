import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./components/App/App";
// Context API
import { StateProvider } from "./StateProvider";
import { initialState } from "./reducer";
import reducer from "./reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <Switch>
          <App />
        </Switch>
      </Router>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
