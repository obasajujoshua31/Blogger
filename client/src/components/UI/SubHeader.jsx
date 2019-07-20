import React, { Fragment } from "react";
import auth from "../../utils/auth";
import { useAlert } from "react-alert";
import { Link, withRouter } from "react-router-dom";
import "./style.css";

const SubHeader = props => {
  const alert = useAlert();
  const isAuth = auth.authenticate();
  return (
    <div className="subheader-container">
      <div>
        <img
          src="https://demo.rigorousthemes.com/blog-lite/wp-content/uploads/2016/06/site-logo-white.png"
          alt=""
          className="brand-logo"
        />
      </div>
      <div className="subheader-menu">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {isAuth ? (
              <Fragment>
                <li>
                  <Link
                    to="/"
                    onClick={e => auth.logout(e, props.history, alert)}
                  >
                    Logout
                  </Link>
                </li>
              </Fragment>
            ) : (
              <Fragment>
                <li>
                  <Link to="/login">SignIn</Link>
                </li>
                <li>
                  <Link to="/register">Create Account</Link>
                </li>
              </Fragment>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default withRouter(SubHeader);
