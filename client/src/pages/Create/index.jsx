import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Template from "../../components/UI/Template";
import Logo from "../../components/UI/Logo";
import "./style.scss";
import { useAlert } from "react-alert";
import useForm from "../../components/Hooks/useForm";
import { context } from "../../store/context";
import { registerUser } from "../../store/actions/login";
import Loader from "../../components/UI/Loader";

function RegisterPage(props) {
  const { state, handleChange } = useForm({
    email: "",
    name: "",
    password: "",
  });
  const { store, dispatch } = useContext(context);

  const alert = useAlert();
  const handleSubmit = e => {
    e.preventDefault();
    const { email, password, name } = state;
    registerUser(
      { email: email[0], password: password[0], name: name[0] },
      props.history,
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
            {store.error.register && (
              <span className="text-danger">{store.error.register}</span>
            )}
            <input
              type="text"
              placeholder="full name"
              name="name"
              value={state.name}
              onChange={handleChange}
              required
            />
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
              <button>{store.isLoading ? "" : "Create Account"}</button>
              {store.isLoading && <Loader />}
            </div>
            <div>
              <small>Already registered? </small>
              <Link to="/login">Login?</Link>
            </div>
          </div>
        </form>
      </div>
    </Template>
  );
}

export { RegisterPage };
