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
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import { AUTH_ERROR } from "./state/actions/actionTypes";
import CreateProfile from "./components/profile-forms/CreateProfile";
import EditProfile from "./components/profile-forms/EditProfile";
import AddExperience from "./components/profile-forms/AddExperience";
import AddEducation from "./components/profile-forms/AddEducation";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";

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
        <Route exact path="/" component={Landing} />
        <div className="container">
          <Alert />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profiles" component={Profiles} />
            <Route exact path="/profile/:userId" component={Profile} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute
              exact
              path="/create-profile"
              component={CreateProfile}
            />
            <PrivateRoute exact path="/edit-profile" component={EditProfile} />
            <PrivateRoute
              exact
              path="/add-experience"
              component={AddExperience}
            />
            <PrivateRoute
              exact
              path="/add-education"
              component={AddEducation}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
