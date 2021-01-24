const express = require('express');

const router = express.Router();

const bot = require('../controllers/twitchBot');

router.post('/initialize', bot.initialize);

module.exports = router;
