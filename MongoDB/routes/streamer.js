const express = require('express');

const streamer = require('../controllers/streamer');

const router = express.Router();

router.post('/create', streamer.createStreamer);

router.post('/adduser', streamer.addUser);

router.get('/get', streamer.getStreamer);

router.get('/get-all', streamer.getAllStreamers);

router.get('/get-refresh_token', streamer.getRefreshToken);

router.post('/add-song', streamer.addSong);

module.exports = router;
