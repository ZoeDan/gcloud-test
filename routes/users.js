var express = require('express');
var router = express.Router();
var writeLogs = require('../writeLog');

/* GET users listing. */
router.get('/', function(req, res, next) {
  writeLogs();
  res.send('respond with a resource');
});

module.exports = router;
