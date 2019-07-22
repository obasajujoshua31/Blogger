import React from "react";
import { Link, withRouter } from "react-router-dom";
import moment from "moment";

function BlogContent({ article, history, articles }) {
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
          <h2>{article.description}</h2>
          <div className="showcase-content-icons">
            <span className="showcase-content-group">
              <i className="fas fa-user font-icons" />
              <Link to="#">
                <span className="font-text"> {article.User.name} </span>
              </Link>
            </span>
            <span className="showcase-content-group">
              <i className="fas fa-calendar-week font-icons" />
              <Link to="#">
                <span className="font-text">
                  {moment(article.createdAt).format("LLLL")}
                </span>
              </Link>
            </span>
          </div>

          <div className="showcase-content-details">
            <p>{article.content}</p>
          </div>
          <div className="navigation-buttons">
            <button
              className="goback-button"
              onClick={() => {
                history.go(-1);
              }}
            >
              <span className="back-arrow">&#8592;</span>Go back
            </button>
            <button
              className="goback-button"
              onClick={() => {
                history.push(`/articles/${articles[0].article_id}`);
              }}
            >
              <span className="back-arrow">Next &#8594;</span>
            </button>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default withRouter(BlogContent);
