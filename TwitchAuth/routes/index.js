const express = require('express');

const authenticateWithTwitch = require('../controllers/authenticateWithTwitch');

const router = express.Router();

router.get('/authenticate', authenticateWithTwitch);

module.exports = router;
