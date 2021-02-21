const express = require('express');

const router = express.Router();

const streamer = require('../controllers/streamerAPI');

router.post('/create', streamer.createNewStreamer);

router.get('/', streamer.getStreamerData);

router.get('/users', streamer.getAllUsers);

module.exports = router;
