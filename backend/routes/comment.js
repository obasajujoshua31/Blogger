const { Router } = require("express");
const middlewares = require("../middlewares/validate");
const auth = require("../middlewares/authenticate");
const CommentController = require("../controllers/comment");

const router = Router();

router
  .route("/:id")
  .get(CommentController.getComment())
  .post(
    middlewares.validatePostComment(),
    auth.authenticateUser,
    CommentController.createNewComment()
  )
  .put(
    auth.authenticateUser,
    auth.confirmCommentAuthor,
    CommentController.updateCommentByReviewer()
  )
  .delete(
    auth.authenticateUser,
    auth.confirmCommentAuthor,
    CommentController.deleteCommentByReviewer()
  );

module.exports = router;
