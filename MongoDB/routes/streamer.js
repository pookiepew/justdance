const express = require('express');

const streamer = require('../controllers/streamer');

const router = express.Router();

router.get('/get', streamer.getStreamer);

router.post('/add-user', streamer.addUser);

module.exports = router;
