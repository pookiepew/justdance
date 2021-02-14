const express = require('express');

const router = express.Router();

const streamer = require('../controllers/streamerAPI');

router.get('/', streamer.getStreamerData);

router.get('/users', streamer.getAllUsers);

module.exports = router;
