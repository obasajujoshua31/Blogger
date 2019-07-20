const globalFn = require("../utils/global");
const CommentService = require("../services/comment");
const ArticleService = require("../services/article");

module.exports.createNewComment = function() {
  return globalFn.asyncWrapper(async (req, res) => {
    const {
      body: { content },
      user: { user_id },
      params: { id },
    } = req;
    const article = await ArticleService.getArticleById(id);
    if (article) {
      const comment = await CommentService.createComment(
        { reviewer_id: user_id, content, article_id: id },
        article
      );
      return globalFn.sendHttpResponse(
        res,
        201,
        "Comment created successfully",
        {
          data: comment,
        }
      );
    }
    return globalFn.sendHttpResponse(res, 404, "Article is not found", {});
  });
};

module.exports.getComment = function() {
  return globalFn.asyncWrapper(async (req, res) => {
    const {
      params: { id },
    } = req;
    const comment = await CommentService.getCommentById(id);
    return globalFn.sendHttpResponse(
      res,
      200,
      "Comment retrieved successfully",
      { data: comment }
    );
  });
};

module.exports.updateCommentByReviewer = function() {
  return globalFn.asyncWrapper(async (req, res) => {
    const {
      body: { content },
      comment,
    } = req;
    const updatedComment = await CommentService.updateComment(comment, {
      content,
    });
    return globalFn.sendHttpResponse(res, 200, "Comment updated successfully", {
      data: updatedComment,
    });
  });
};

module.exports.deleteCommentByReviewer = function() {
  return globalFn.asyncWrapper(async (req, res) => {
    const {
      params: { id },
    } = req;
    await CommentService.deleteComment(id);
    return globalFn.sendHttpResponse(
      res,
      200,
      "Comment deleted successfully",
      {}
    );
  });
};
