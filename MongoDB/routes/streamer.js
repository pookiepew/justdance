const express = require('express');

const streamer = require('../controllers/streamer');

const router = express.Router();

router.post('/create', streamer.createStreamer);

router.post('/adduser', streamer.addUser);

router.get('/get', streamer.getStreamer);

router.get('/get-all', streamer.getAllStreamers);

router.get('/get-refresh_token', streamer.getRefreshToken);

router.post('/add-song', streamer.addSong);

router.post('/remove-song', streamer.removeSongFromList);

router.get('/get-songlist', streamer.getSongList);

router.get('/get-songlist-titles', streamer.getSonglistTitles);

module.exports = router;
