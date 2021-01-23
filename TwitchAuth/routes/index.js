const express = require('express');

const authenticateWithTwitch = require('../controllers/authenticateWithTwitch');

const refreshTokenWithTwitch = require('../controllers/refreshTokenWithTwitch');

const router = express.Router();

router.get('/authenticate', authenticateWithTwitch);

router.get('/refresh-token', refreshTokenWithTwitch);

module.exports = router;
