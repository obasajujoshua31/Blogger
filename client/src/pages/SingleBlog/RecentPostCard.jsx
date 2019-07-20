import React from "react";
import { Link } from "react-router-dom";

function RecentPostCard() {
  return (
    <div className="single-blog-recent-post-card">
      <div>
        <div className="single-blog-recent-post-card-header">
          <p>RECENT POSTS</p>
        </div>
        <div className="single-blog-recent-post-card-details">
          <div className="single-blog-recnet-post-card-details-image">
            <img
              src="https://demo.rigorousthemes.com/blog-lite/wp-content/uploads/2016/07/mount-everest-89590_1920-1024x768.jpg"
              alt=""
            />
          </div>
          <div className="single-blog-recent-post-card-details-content">
            <Link to="#">
              <h6>The Adventure moment in the mount everest</h6>
            </Link>
            <span>
              <i className="far fa-clock clock-icon" />
              <span>July 11, 2019</span>
            </span>
            <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentPostCard;
