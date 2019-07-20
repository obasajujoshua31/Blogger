const jwt = require("jsonwebtoken");
const UserService = require("../services/user");
const config = require("../config/config");
const globalFn = require("../utils/global");
const ArticleService = require("../services/article");
const CommentService = require("../services/comment");

module.exports.authenticateUser = async function(req, res, next) {
  const token = req.headers.authorization;

  if (typeof token !== "undefined") {
    try {
      const decoded = jwt.verify(token, config.jwtConfigs.secret);
      const user = await UserService.findUserById(decoded.user_id);
      req.user = user;
      return next();
    } catch (error) {}
  }
  return globalFn.sendHttpResponse(res, 401, "Unauthorized", {});
};

module.exports.confirmArticleAuthor = async function(req, res, next) {
  const {
    user: { user_id },
    params: { id },
  } = req;
  const article = await ArticleService.getArticleById(id);
  if (article) {
    if (article.User.user_id === user_id) {
      req.article = article;
      return next();
    }
    return globalFn.sendHttpResponse(res, 401, "Forbidden", {});
  }
  return globalFn.sendHttpResponse(res, 400, "Article not found", {});
};

module.exports.confirmCommentAuthor = async function(req, res, next) {
  const {
    user: { user_id },
    params: { id },
  } = req;
  const comment = await CommentService.getCommentById(id);
  if (comment) {
    if (comment.User.user_id === user_id) {
      req.comment = comment;
      return next();
    }
    return globalFn.sendHttpResponse(res, 401, "Forbidden", {});
  }
  return globalFn.sendHttpResponse(res, 400, "Comment not found", {});
};
