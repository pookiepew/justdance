const express = require('express');

const initializeBot = require('../controllers/initializeBot');

const router = express.Router();

router.post('/initialize', initializeBot);

module.exports = router;
