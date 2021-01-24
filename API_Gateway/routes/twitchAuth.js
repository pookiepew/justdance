const express = require('express');

const router = express.Router();

const twitch = require('../controllers/twitchAuth');

router.get('/authenticate', twitch.authenticate);

module.exports = router;
