
const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const { updateUser } = require('../controllers/User.controller.js');

const routerManager2 = express.Router();

routerManager2.post('/update/:id', verifyToken, updateUser)

module.exports = routerManager2;