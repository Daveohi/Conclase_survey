const express = require("express");
const { login, test } = require("../controllers/UserAuth.controller");
const { register } = require("../controllers/UserAuth.controller");
const routerManager = express.Router();

routerManager.post('/login', login)
routerManager.post('/register', register)
routerManager.post('/test', test)

module.exports = routerManager