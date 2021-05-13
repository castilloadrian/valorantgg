var express = require('express');
var router = express.Router();
var connection = require('./../mysql');

/* GET and POST properties. */
router.get('/matchhistory', function(req, res, next) {
  connection.query('SELECT * FROM `matchhistory`', function (error, results, fields) {
    res.send(results);
  });
});

router.post('/matchhistory', function(req, res, next) {
  kills = req.body["kills"];
  deaths = req.body["deaths"];
  assists = req.body["assists"];
  fb = req.body["fb"];
  fd = req.body["fd"];

  var sql = `INSERT INTO matchhistory 
            (
              kills, deaths, assists ,fb, fd
            )
            VALUES
            (
              ?, ?, ?, ?, ?
            )`;

  connection.query(
    sql,[kills, deaths, assists ,fb, fd], 
    function (err, results) {
      res.send("Matchhistory added succesfully");
    });
});

module.exports = router;