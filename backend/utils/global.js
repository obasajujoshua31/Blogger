const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../config/config");

module.exports.sendHttpResponse = function(res, statusCode, message, data) {
  return res.status(statusCode).json({
    success: statusCode < 300,
    message,
    ...data,
  });
};

module.exports.asyncWrapper = function(handler) {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.log("There is error", error);
      this.sendHttpResponse(res, 500, "Server Error", null);
    }
  };
};

module.exports.generateToken = function(user) {
  return jwt.sign({ user_id: user.user_id }, config.jwtConfigs.secret);
};

module.exports.hashPassword = function(password) {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

module.exports.comparePassword = function(password, dbPassword) {
  return bcrypt.compareSync(password, dbPassword);
};
