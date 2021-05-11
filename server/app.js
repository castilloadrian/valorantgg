const express = require('express');
const path = require('path');
const app = express();

var cors = require('cors');
app.use(cors());

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var leaderboardRouter = require('./routes/leaderboard');
var valcontentRouter = require('./routes/valcontent');
var agentsRouter = require('./routes/agents');
var mapsRouter = require('./routes/maps');
var ascentRouter = require('./routes/ascent');
var riotRouter = require('./routes/riot');
var matchhistory = require('./routes/matchhistory');


app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/',leaderboardRouter);
app.use('/',valcontentRouter);
app.use('/',agentsRouter);
app.use('/',mapsRouter);
app.use('/',ascentRouter);
app.use('/',riotRouter);
app.use('/',matchhistory);



//Set the port that you want the server to run on
const port = process.env.PORT || 8080;
app.listen(port);
console.log('App is listening on port ' + port);