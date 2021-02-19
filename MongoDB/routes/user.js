const express = require('express');

const user = require('../controllers/user');

const router = express.Router();

router.post('/save', user.save);

router.get('/find', user.findByTwitchID);

router.get('/all', user.getAllUsers);

module.exports = router;
