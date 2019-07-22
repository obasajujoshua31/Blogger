import React, { useEffect, useContext, Fragment } from "react";
import { withRouter } from "react-router-dom";
import Template from "../../components/UI/Template";
import BlogHeader from "./BlogHeader";
import BlogContent from "./BlogContent";
import BlogCommentArea from "./BlogCommentArea";
import SingleBlogSideBar from "./SingleBlogSideBar";
import "./style.scss";
import { getArticle } from "../../store/actions/article";
import { context } from "../../store/context";
import PageLoader from "../../components/UI/PageLoader";

function SingleBlog(props) {
  const { store, dispatch } = useContext(context);
  useEffect(() => {
    getArticle(props.match.params.id, dispatch);
  }, [dispatch, props.match.params.id]);
  return (
    <Template>
      {store.isLoading || !store.article || !store.articles ? (
        <div className="page-loader">
          <PageLoader />
        </div>
      ) : (
        <Fragment>
          <BlogHeader article={store.article} />
          <div className="singleblogpage">
            <div>
              <BlogContent article={store.article} articles={store.articles} />
              <BlogCommentArea article={store.article} />
            </div>
            <div className="singleblog-sidebar">
              <SingleBlogSideBar
                articles={store.articles}
                article={store.article}
              />
            </div>
          </div>
        </Fragment>
      )}
    </Template>
  );
}

export default withRouter(SingleBlog);
