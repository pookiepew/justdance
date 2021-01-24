const express = require('express');

const user = require('../controllers/user');

const router = express.Router();

router.post('/save', user.save);

router.get('/find', user.findByTwitchID);

module.exports = router;
