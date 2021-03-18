import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./state/store/store";

import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";

import { loadUser } from "./state/actions/authAction";
import setAuthToken from "./utils/setAuthToken";

import "./App.css";
import { AUTH_ERROR } from "./state/actions/actionTypes";
import Routes from "./components/routing/Routes";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    if (localStorage.token) {
      store.dispatch(loadUser());
    } else {
      store.dispatch({ type: AUTH_ERROR });
    }
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route component={Routes} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
