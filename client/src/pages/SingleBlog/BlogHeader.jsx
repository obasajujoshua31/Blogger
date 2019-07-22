import React from "react";

function BlogHeader({ article }) {
  return (
    <div className="blogheader">
      <h2>{article.description}</h2>
    </div>
  );
}

export default BlogHeader;
