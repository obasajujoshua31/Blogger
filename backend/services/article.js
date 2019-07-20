const models = require("../models");
const { Article, User, Comment } = models;

module.exports.getArticleById = async function(article_id) {
  return await Article.findOne({
    where: {
      article_id,
    },
    include: [
      {
        model: User,
        attributes: ["user_id", "email", "name"],
      },
      {
        model: Comment,
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

module.exports.getAllArticles = async function() {
  return await Article.findAll({
    include: [
      {
        model: User,
        attributes: ["user_id", "email", "name"],
      },
      {
        model: Comment,
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

module.exports.createArticle = async function(article) {
  return await Article.create(article);
};

module.exports.updateArticle = async function(article, update) {
  article.content = update.content || article.content;
  article.description = update.content || article.description;
  await article.save();
  await article.reload();
  return article;
};

module.exports.deleteArticle = async function(article_id) {
  return await Article.destroy({
    where: {
      article_id,
    },
  });
};

module.exports.verifyPassword = function(user, password) {
  return user.matchPassword(password);
};
