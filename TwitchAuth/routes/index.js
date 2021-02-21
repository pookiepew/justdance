const express = require('express');

const authenticateWithTwitch = require('../controllers/authenticateWithTwitch');

const refreshTokenWithTwitch = require('../controllers/refreshTokenWithTwitch');

const refreshStreamerToken = require('../controllers/refreshStreamerToken');

const router = express.Router();

router.get('/authenticate', authenticateWithTwitch);

router.get('/refresh-token', refreshTokenWithTwitch);

router.get('/refresh-streamer-token', refreshStreamerToken);

module.exports = router;
