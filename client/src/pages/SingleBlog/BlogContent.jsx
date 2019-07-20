import React from "react";
import { Link } from "react-router-dom";

function BlogContent() {
  return (
    <div>
      <div className="singleblog-showcase">
        <div className="showcase-image">
          <img
            src="https://demo.rigorousthemes.com/blog-lite/wp-content/uploads/2016/07/mount-everest-89590_1920-1024x768.jpg"
            alt=""
          />
        </div>
        <div className="showcase-content">
          <h2>The Adventure Moment in the Mt. Everest</h2>
          <div className="showcase-content-icons">
            <span className="showcase-content-group">
              <i className="fas fa-user font-icons" />
              <Link to="#">
                <span className="font-text"> Super User </span>
              </Link>
            </span>
            <span className="showcase-content-group">
              <i className="fas fa-calendar-week font-icons" />
              <Link to="#">
                <span className="font-text"> July 11, 2019</span>
              </Link>
            </span>
          </div>

          <div className="showcase-content-details">
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh.
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
              dui. Vivamus suscipit tortor eget felis porttitor volutpat.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
              vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget
              felis porttitor volutpat. Pellentesque in ipsum id orci porta
              dapibus.
            </p>
          </div>
          <button className="goback-button">
            <span className="back-arrow">&#8592;</span>Go back
          </button>
        </div>
      </div>
      <div className="singleblog-sidebar" />
    </div>
  );
}

export default BlogContent;
