module.exports = (sequelize, Sequelize) => {
  const articleSchema = {
    article_id: {
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

    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    numberOfComments: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    author_id: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  };

  const article = sequelize.define("Article", articleSchema, {});

  article.associate = db => {
    article.belongsTo(db.User, {
      foreignKey: "author_id",
    });
    article.hasMany(db.Comment, {
      foreignKey: "article_id",
      sourceKey: "article_id",
      delete: "CASCADE",
    });
  };
  return article;
};
