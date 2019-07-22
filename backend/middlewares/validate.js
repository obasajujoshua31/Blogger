const { validationResult, check } = require("express-validator");

module.exports.validateUserRegistration = function() {
  return [
    check("email")
      .isLength({ min: 1 })
      .withMessage("email cannot be empty"),
    check("password")
      .isLength({ min: 1 })
      .withMessage("password cannot be empty"),

    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(404).json({
          success: false,
          errors: errors.array(),
        });
      }
      return next();
    },
  ];
};

module.exports.validatePostArticle = function() {
  return [
    check("content")
      .isLength({ min: 1 })
      .withMessage("content cannot be empty"),
    check("description")
      .isLength({ min: 1 })
      .withMessage("Description cannot be empty"),
    check("heading")
      .isLength({ min: 1 })
      .withMessage("Heading cannot be empty"),

    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(404).json({
          success: false,
          errors: errors.array(),
        });
      }
      return next();
    },
  ];
};

module.exports.validatePostComment = function() {
  return [
    check("content")
      .isLength({ min: 1 })
      .withMessage("content cannot be empty"),

    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(404).json({
          success: false,
          errors: errors.array(),
        });
      }
      return next();
    },
  ];
};
