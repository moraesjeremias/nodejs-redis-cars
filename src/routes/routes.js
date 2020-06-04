const express = require('express');
const routes = express.Router();
const redisController = require('../controller/redisController');

routes.get('/status', redisController.status)

module.exports = routes;
