
var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/valcontent', function(req, res, next) {
  request({
    uri: 'https://na.api.riotgames.com/val/content/v1/contents',
    qs: {
      api_key: 'RGAPI-6d2557f1-12d0-4bb1-81f7-5dc0581faf35',
      query: '52e9749a-429b-7060-99fe-4595426a0cf7'
    }
  }).pipe(res);
});


module.exports = router;