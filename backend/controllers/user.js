const UserService = require("../services/user");
const globalFn = require("../utils/global");

module.exports.registerUser = function() {
  return globalFn.asyncWrapper(async (req, res) => {
    const foundUser = await UserService.getUserByEmail(req.body.email);
    if (foundUser) {
      return globalFn.sendHttpResponse(
        res,
        422,
        "Email is not available",
        null
      );
    }

    const { email, password, name } = req.body;
    const user = await UserService.createUser({ email, password, name });
    const token = globalFn.generateToken(user);
    return globalFn.sendHttpResponse(res, 201, "User registered successfully", {
      data: token,
    });
  });
};

module.exports.logInUser = function() {
  return globalFn.asyncWrapper(async (req, res) => {
    const { email, password } = req.body;

    const user = await UserService.getUserByEmail(email);
    if (user) {
      if (UserService.verifyPassword(user, password)) {
        return globalFn.sendHttpResponse(
          res,
          200,
          "User logged in successfully",
          { token: globalFn.generateToken(user) }
        );
      }
    }
    return globalFn.sendHttpResponse(
      res,
      401,
      "Invalid Login Credentials",
      null
    );
  });
};

module.exports.getUserProfile = function() {
  return globalFn.asyncWrapper(async (req, res) => {
    const { user_id } = req.user;
    const foundUser = await UserService.findUserById(user_id);
    return globalFn.sendHttpResponse(res, 200, "User Profile retrieved", {
      data: foundUser,
    });
  });
};
