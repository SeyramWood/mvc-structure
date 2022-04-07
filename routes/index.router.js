const { Router } = require("express");
const { welcome, greet } = require("../controllers/index.controller");
const indexRouter = Router();

indexRouter.get("/", welcome);
indexRouter.get("/greet", greet);

module.exports = indexRouter;
