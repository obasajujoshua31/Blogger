const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  development: {
    dialect: "sqlite",
    storage: "blogger.dev.db",
    logging: false,
  },
  production: {
    dialect: "sqlite",
    storage: "blogger.prod.db",
    logging: false,
  },
};

module.exports.jwtConfigs = {
  secret: process.env.JWT_SECRET,
};
