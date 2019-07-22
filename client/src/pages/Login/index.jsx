import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { useAlert } from "react-alert";
import Template from "../../components/UI/Template";
import "./style.css";
import Logo from "../../components/UI/Logo";
import useForm from "../../components/Hooks/useForm";
import { context } from "../../store/context";
import { loginUser } from "../../store/actions/login";
import Loader from "../../components/UI/Loader";

function LoginPage(props) {
  const { state, handleChange } = useForm({ email: "", password: "" });
  const { store, dispatch } = useContext(context);
  const alert = useAlert();
  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = state;
    loginUser(
      { email: email[0], password: password[0] },
      props,
      alert,
      dispatch
    );
  };
  return (
    <Template>
      <div className="login-form-wrapper">
        <form className="login-form-container" onSubmit={handleSubmit}>
          <Logo />
          <div className="login-form-card">
            {store.error.login && (
              <span className="text-danger">{store.error.login}</span>
            )}
            <input
              type="email"
              placeholder="email"
              name="email"
              value={state.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={state.password}
              onChange={handleChange}
              required
            />
            <div className="login-buttons">
              <button>{store.isLoading ? "" : "LogIn"}</button>
              {store.isLoading && <Loader />}
            </div>
            <div>
              <small>Not registered? </small>
              <Link to="/register">Create Account?</Link>
            </div>
          </div>
        </form>
      </div>
    </Template>
  );
}
export default withRouter(LoginPage);
