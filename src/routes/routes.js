const express = require('express');
const routes = express.Router();
const redisController = require('../controller/redisController');

routes.get('/status', redisController.status)
routes.get('/test-debits', redisController.retrieveDebts)

module.exports = routes;
