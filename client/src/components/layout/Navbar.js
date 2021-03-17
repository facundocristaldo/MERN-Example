import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../state/actions/authAction";

const Navbar = () => {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const authLinks = (
    <ul>
      <li>
        <a onClick={handleLogout}>
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sma">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/#!">Developers</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> DevConnector
        </Link>
      </h1>
      {!authState.loading && (
        <> {authState.isAuthenticated ? authLinks : guestLinks}</>
      )}
    </nav>
  );
};
export default Navbar;
