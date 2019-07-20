import React from "react";
import Header from "./Header";
import SubHeader from "./SubHeader";
import Footer from "./Footer";

const Template = props => {
  return (
    <div>
      <Header />
      <SubHeader />
      {props.children}
      <Footer />
    </div>
  );
};

export default Template;
