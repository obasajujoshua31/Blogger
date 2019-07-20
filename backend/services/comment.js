const models = require("../models");
const { Article, User, Comment } = models;

module.exports.createComment = async function(comment, article) {
  await article.increment("numberOfComments");
  return await Comment.create(comment);
};

module.exports.getCommentById = async function(id) {
  return await Comment.findOne({
    where: {
      comment_id: id,
    },
    include: [
      {
        model: User,
        attributes: ["email", "name", "user_id"],
      },
      {
        model: Article,
        include: [
          {
            model: User,
            attributes: ["email", "name", "user_id"],
          },
        ],
      },
    ],
  });
};

module.exports.getAllArticlesComment = async function(article_id) {
  return await Comment.findAll({
    where: {
      article_id,
    },
    include: [
      {
        model: User,
        attributes: ["email", "name", "user_id"],
      },
      {
        model: Article,
        include: [
          {
            model: User,
            attributes: ["email", "name", "user_id"],
          },
        ],
      },
    ],
  });
};

module.exports.updateComment = async function(comment, update) {
  comment.content = update.content;
  await comment.save();
  await comment.reload();
  return comment;
};

module.exports.deleteComment = async function(id) {
  return await Comment.destroy({
    where: {
      comment_id: id,
    },
  });
};
