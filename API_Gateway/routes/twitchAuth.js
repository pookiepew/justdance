const express = require('express');

const router = express.Router();

router.get('/auth', (req, res, next) => res.send('Hello'));

module.exports = router;
