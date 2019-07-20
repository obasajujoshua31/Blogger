import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider as AlertProvider, positions, transitions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import routes from "./router";
import "./App.css";
import Provider from "./store/context";

const alertOptions = {
  offset: "25px",
  timeout: 3000,
  transition: transitions.SCALE,
};

function App() {
  const renderComponents = routes.map((route, index) => (
    <Route
      path={route.path}
      exact={route.exact}
      component={route.component}
      key={index}
    />
  ));
  return (
    <div className="App">
      <Provider>
        <AlertProvider
          template={AlertTemplate}
          position={positions.TOP_RIGHT}
          {...alertOptions}
        >
          <Router>
            <Switch>{renderComponents}</Switch>
          </Router>
        </AlertProvider>
      </Provider>
    </div>
  );
}

export default App;
