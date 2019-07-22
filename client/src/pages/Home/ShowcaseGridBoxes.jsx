import React, { useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import "./style.css";
import SingleArticle from "./SingleArticle";
import { getArticles } from "../../store/actions/article";
import { context } from "../../store/context";
import PageLoader from "../../components/UI/PageLoader";

const ShowCaseGridBoxes = props => {
  const { dispatch, store } = useContext(context);
  useEffect(() => {
    getArticles(dispatch);
  }, [dispatch]);

  const handleClick = article => {
    props.history.push(`/articles/${article.article_id}`);
  };
  return (
    <div className="showcasegridboxes">
      {store.isLoading ? (
        <PageLoader />
      ) : (
        store.articles.map((article, index) => (
          <SingleArticle
            key={index}
            article={article}
            articles={store.articles}
            handleClick={() => handleClick(article)}
          />
        ))
      )}
    </div>
  );
};

export default withRouter(ShowCaseGridBoxes);
