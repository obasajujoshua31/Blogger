const { Router } = require("express");
const authRoutes = require("./auth");
const articleRoutes = require("./article");
const commentRoutes = require("./comment");
const router = Router();

router.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Welcome to Blogger ApI",
  });
});

router.use("/auth", authRoutes);
router.use("/article", articleRoutes);
router.use("/comment", commentRoutes);

module.exports = router;
