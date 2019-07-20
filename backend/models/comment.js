module.exports = (sequelize, Sequelize) => {
  const commentSchema = {
    comment_id: {
      type: Sequelize.UUID,
      primaryKey: true,
      unique: true,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4,
    },
    content: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    reviewer_id: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    article_id: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  };

  const comment = sequelize.define("Comment", commentSchema, {});

  comment.associate = db => {
    comment.belongsTo(db.User, {
      foreignKey: "reviewer_id",
    });
    comment.belongsTo(db.Article, {
      foreignKey: "article_id",
    });
  };
  return comment;
};
