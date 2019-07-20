import React, { Component } from "react";
import Template from "../../components/UI/Template";
import Showcase from "./Showcase";
import ShowCaseGridBoxes from "./ShowcaseGridBoxes";

class Home extends Component {
  render() {
    return (
      <Template>
        <Showcase />
        <ShowCaseGridBoxes />
      </Template>
    );
  }
}

export { Home };
