const globalFn = require("../utils/global");

module.exports = (sequelize, Sequelize) => {
  const userSchema = {
    user_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      unique: true,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4,
    },
    is_admin: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNullL: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  };

  const user = sequelize.define("User", userSchema, {
    hooks: {
      beforeCreate: user => {
        user.password = globalFn.hashPassword(user.password);
        return user.password;
      },
    },
  });

  user.associate = db => {
    user.hasMany(db.Article, {
      foreignKey: "author_id",
      sourceKey: "user_id",
    });
    user.hasMany(db.Comment, {
      foreignKey: "reviewer_id",
      sourceKey: "user_id",
    });
  };

  user.prototype.matchPassword = function(password) {
    return globalFn.comparePassword(password, this.password);
  };

  return user;
};
