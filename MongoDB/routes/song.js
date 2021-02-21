const express = require('express');

const song = require('../controllers/song');

const router = express.Router();

router.get('/', song.getAll);

module.exports = router;
