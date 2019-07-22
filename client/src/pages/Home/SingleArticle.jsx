import React from "react";

function SingleArticle({ article, handleClick }) {
  return (
    <div className="single-article">
      <button onClick={handleClick}>{article.heading} </button>
    </div>
  );
}

export default SingleArticle;
