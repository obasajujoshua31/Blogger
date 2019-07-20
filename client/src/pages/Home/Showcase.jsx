import React, { Fragment } from "react";
import ControlledCarousel from "../../components/UI/Carousel";
import Button from "../../components/UI/Button";

const Showcase = () => {
  return (
    <Fragment>
      <ControlledCarousel />
      <Button text="Continue Reading" />
    </Fragment>
  );
};

export default Showcase;
