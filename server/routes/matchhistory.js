var express = require('express');
var router = express.Router();
var connection = require('./../mysql');

/* GET and POST properties. */
router.get('/matchhistory', function(req, res, next) {
  connection.query('SELECT * FROM `matchhistory`', function (error, results, fields) {
    res.send(results);
  });

});

module.exports = router;