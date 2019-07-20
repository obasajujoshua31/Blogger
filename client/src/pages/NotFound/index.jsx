import React from "react";
import "./style.scss";
import Template from "../../components/UI/Template";

function NotFound() {
  return (
    <Template>
      <div className="notfound">
        <h1>404 Not Found</h1>
        <p>Looks like you lost your way!</p>
      </div>
    </Template>
  );
}

export { NotFound };
