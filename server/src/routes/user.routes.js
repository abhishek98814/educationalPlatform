const express = require("express")
const routes = express.Router();
const {createUser, loginUser} = require("../controller/user.controller");

routes.post("/signup", createUser )
routes.post("/login", loginUser)

module.exports = routes;