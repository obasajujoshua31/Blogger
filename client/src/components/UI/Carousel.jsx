import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./style.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 image-carousel"
          src="https://demo.rigorousthemes.com/blog-lite/wp-content/uploads/2016/06/engagement-1718244_1920.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>MEMORABLE TIME</h2>
          <p>June 7, 2019</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image-carousel"
          src="https://demo.rigorousthemes.com/blog-lite/wp-content/uploads/2016/06/engagement-1718244_1920.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2>Second slide label</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
