import React from "react";
import moment from "moment";

function BlogComment({ comment }) {
  return (
    <div className="blog-comment">
      <div className="blog-comment-details">
        <span>{comment.User.name}</span>
        <span className="date">{moment(comment.createdAt).format("LLLL")}</span>
      </div>
      <p className="comment">{comment.content}</p>
    </div>
  );
}

export default BlogComment;
