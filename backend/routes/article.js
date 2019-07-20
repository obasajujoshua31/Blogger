const { Router } = require("express");
const ArticleController = require("../controllers/article");
const middlewares = require("../middlewares/validate");
const auth = require("../middlewares/authenticate");

const router = Router();

router
  .route("/")
  .post(
    middlewares.validatePostArticle(),
    auth.authenticateUser,
    ArticleController.postNewArticle()
  )
  .get(ArticleController.allAvailableArticles());

router
  .route("/:id")
  .get(ArticleController.getOneArticle())
  .put(
    auth.authenticateUser,
    auth.confirmArticleAuthor,
    ArticleController.updateArticleByUser()
  )
  .delete(
    auth.authenticateUser,
    auth.confirmArticleAuthor,
    ArticleController.deleteArticle()
  );

module.exports = router;
