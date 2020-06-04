const express = require('express');
const routes = express.Router();
const redisController = require('../controller/redisController');

routes.get('/status', redisController.status)
routes.get('/test-debts', redisController.retrieveAllDebts)
routes.post('/test-debts', redisController.retrieveQueriedDebt)
routes.post('/cached-debts', redisController.chachedDebts)

module.exports = routes;
