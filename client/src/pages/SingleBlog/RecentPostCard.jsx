import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

function RecentPostCard(props) {
  return (
    <div className="single-blog-recent-post-card">
      <div>
        <div className="single-blog-recent-post-card-header">
          <p>RECENT POSTS</p>
        </div>
        {props.articles.map(article => (
          <div
            className="single-blog-recent-post-card-details"
            key={article.article_id}
          >
            <div className="single-blog-recnet-post-card-details-image">
              <img
                src="https://demo.rigorousthemes.com/blog-lite/wp-content/uploads/2016/07/mount-everest-89590_1920-1024x768.jpg"
                alt=""
              />
            </div>
            <div className="single-blog-recent-post-card-details-content">
              <Link to={`/articles/${article.article_id}`}>
                <h6>{article.description}</h6>
              </Link>
              <span>
                <i className="far fa-clock clock-icon" />
                <span>{moment(article.createdAt).format("LLLL")}</span>
              </span>
              <p>{article.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentPostCard;
