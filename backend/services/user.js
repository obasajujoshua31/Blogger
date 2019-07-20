const models = require("../models");
const { User, Article } = models;

module.exports.getUserByEmail = async function(email) {
  return await User.findOne({
    where: {
      email,
    },
  });
};

module.exports.createUser = async function(user) {
  return await User.create(user);
};

module.exports.findUserById = async function(id) {
  return await User.findOne({
    where: {
      user_id: id,
    },
    attributes: ["user_id", "email", "name"],
    include: [
      {
        model: Article,
      },
    ],
  });
};

module.exports.deleteUserByAdmin = async function(id) {
  return await User.destroy({
    where: {
      user_id: id,
    },
  });
};

module.exports.verifyPassword = function(user, password) {
  return user.matchPassword(password);
};
