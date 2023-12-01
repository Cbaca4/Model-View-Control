const router = require("express").Router();
const apiRouter = require("./api");
const homeRoutes = require("./home-routes");

router.use("/api", apiRouter);
router.use("/", homeRoutes);

module.exports = router;