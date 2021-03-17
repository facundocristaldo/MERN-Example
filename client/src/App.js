import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./state/store/store";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Alert from "./components/layout/Alert";
import { loadUser } from "./state/actions/authAction";
import setAuthToken from "./utils/setAuthToken";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    if (localStorage.token) {
      store.dispatch(loadUser());
    }
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <div className="container">
          <Alert />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
