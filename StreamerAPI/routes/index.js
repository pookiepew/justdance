const express = require('express');

const streamer = require('../controllers/streamer');

const router = express.Router();

router.post('/create', streamer.createNewStreamer);

router.get('/streamer-data', streamer.getStreamerData);

module.exports = router;
