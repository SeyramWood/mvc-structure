const { Router } = require("express");
const { register, login } = require("../controllers/users.controller");

const usersRouter = Router();

usersRouter.get("/login", login);

usersRouter.get("/register", register);

module.exports = usersRouter;
