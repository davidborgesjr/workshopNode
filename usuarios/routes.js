const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('');

router.post('/', controller.criarCliente)

module.exports = router