
var express = require('express');
var router = express.Router();
var request = require('request');

var temp_json = router.get('/leaderboard', function(req, res, next) {
  request({
    uri: 'https://na.api.riotgames.com/val/ranked/v1/leaderboards/by-act/ab57ef51-4e59-da91-cc8d-51a5a2b9b8ff?startIndex=0',
    qs: {
      api_key: 'RGAPI-6d2557f1-12d0-4bb1-81f7-5dc0581faf35',
      query: '52e9749a-429b-7060-99fe-4595426a0cf7'
    }
  }).pipe(res);
});

temp_json

module.exports = router;