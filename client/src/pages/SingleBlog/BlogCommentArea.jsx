import React, { useState, useContext } from "react";
import BlogComment from "./BlogComment";
import auth from "../../utils/auth";
import useForm from "../../components/Hooks/useForm";
import PleaseLoginModal from "../../components/Modals/PleaseLogin";
import { createComment } from "../../store/actions/article";
import { context } from "../../store/context";

function BlogCommentArea(props) {
  const [isOpen, toggleModal] = useState(false);

  const { dispatch } = useContext(context);
  const openModal = () => {
    toggleModal(true);
  };

  const closeModal = () => {
    toggleModal(false);
  };

  const commentOnArticle = () => {
    if (!auth.authenticate()) {
      return openModal();
    }
    createComment(props.article.article_id, state.comment[0], dispatch);
  };
  const { state, handleChange } = useForm({ comment: "" });
  return (
    <div className="single-blog-comment-area">
      {props.article.Comments.map(comment => (
        <BlogComment comment={comment} key={comment.comment_id} />
      ))}

      <h5>Leave a Comment</h5>
      <textarea
        value={state.comment}
        onChange={handleChange}
        name="comment"
        required
      />
      {state.comment[0] && (
        <button onClick={commentOnArticle}>Post Comment</button>
      )}
      <PleaseLoginModal
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
    </div>
  );
}

export default BlogCommentArea;
