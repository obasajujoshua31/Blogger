import React from "react";
import Template from "../../components/UI/Template";
import BlogHeader from "./BlogHeader";
import BlogContent from "./BlogContent";
import BlogCommentArea from "./BlogCommentArea";
import SingleBlogSideBar from "./SingleBlogSideBar";
import "./style.scss";

function SingleBlog() {
  return (
    <Template>
      <BlogHeader />
      <div className="singleblogpage">
        <div>
          <BlogContent />
          <BlogCommentArea />
        </div>
        <div className="singleblog-sidebar">
          <SingleBlogSideBar />
        </div>
      </div>
    </Template>
  );
}

export { SingleBlog };
