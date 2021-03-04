const express = require('express');
const path = require('path');
const app = express();

var cors = require('cors');
app.use(cors());

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var leaderboardRouter = require('./routes/leaderboard')

app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/',leaderboardRouter)


//Set the port that you want the server to run on
const port = process.env.PORT || 8080;
app.listen(port);
console.log('App is listening on port ' + port);