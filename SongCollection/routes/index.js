const express = require('express');

const router = express.Router();

const song = require('../controllers/song');

router.get('/', song.getAll);

module.exports = router;
