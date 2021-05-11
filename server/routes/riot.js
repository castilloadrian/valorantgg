var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/riot', function(req, res, next) {
  res.send('ec694a3998bb');
});

module.exports = router;