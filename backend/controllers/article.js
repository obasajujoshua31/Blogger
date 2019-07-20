const globalFn = require("../utils/global");
const ArticleService = require("../services/article");

module.exports.postNewArticle = function() {
  return globalFn.asyncWrapper(async (req, res) => {
    const {
      body: { content, description },
      user: { user_id },
    } = req;
    const author_id = user_id;
    const newArticle = await ArticleService.createArticle({
      content,
      description,
      author_id,
    });
    return globalFn.sendHttpResponse(res, 201, "Article created successfully", {
      data: newArticle,
    });
  });
};

module.exports.allAvailableArticles = function() {
  return globalFn.asyncWrapper(async (req, res) => {
    const allArticles = await ArticleService.getAllArticles();
    return globalFn.sendHttpResponse(
      res,
      200,
      "Articles retrieved successfully",
      { data: allArticles }
    );
  });
};

module.exports.getOneArticle = function() {
  return globalFn.asyncWrapper(async (req, res) => {
    const article = await ArticleService.getArticleById(req.params.id);
    return globalFn.sendHttpResponse(res, 200, "Article retrieved", {
      data: article,
    });
  });
};

module.exports.deleteArticle = function() {
  return globalFn.asyncWrapper(async (req, res) => {
    const {
      params: { id },
    } = req;

    await ArticleService.deleteArticle(id);
    return globalFn.sendHttpResponse(
      res,
      200,
      "Article deleted successfully",
      {}
    );
  });
};

module.exports.updateArticleByUser = function() {
  return globalFn.asyncWrapper(async (req, res) => {
    const {
      body: { content, description },
      article,
    } = req;

    const updatedArticle = await ArticleService.updateArticle(article, {
      content,
      description,
    });
    return globalFn.sendHttpResponse(res, 200, "Article updated successfully", {
      data: updatedArticle,
    });
  });
};
