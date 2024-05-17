
const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const { updateUser, getUser } = require('../controllers/User.controller.js');

const routerManager2 = express.Router();

routerManager2.post('/update/:id', verifyToken, updateUser)
routerManager2.get('/:id', verifyToken, getUser)

module.exports = routerManager2;