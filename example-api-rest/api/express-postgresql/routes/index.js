var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.json({ name: 'express-api-rest-starter', author: 'www.ganatan.com' });
});

module.exports = router;
