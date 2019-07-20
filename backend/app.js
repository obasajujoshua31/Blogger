const express = require("express");
const dotenv = require("dotenv");
const logger = require("morgan");
const cors = require("cors");
const routes = require("./routes");
dotenv.config();

const port = process.env.PORT || 7000;
//Initialize application
const app = express();

// Install Middlewares
app.use(logger("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Initialize Database
const database = require("./models");

database.sequelize.authenticate().then(() => {
  console.log("Database connected");
});

database.sequelize.sync().then(() => {
  console.log("Tables created successfully");
});

//install routes
app.use("/", routes);
app.use("*", (req, res) => {
  return res.status(404).json({
    success: false,
    message: "This endpoint is not found",
  });
});

app.listen(port, () => {
  console.log("Server started at port ", port);
});
