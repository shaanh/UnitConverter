var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var firebase = require("firebase-admin");

// Initialize Firebase

var config = {
    apiKey: "AIzaSyALnrPUS0DlWb7bgezdHEppgblrUpN03bQ",
    authDomain: "numbersnunits.firebaseapp.com",
    databaseURL: "https://numbersnunits.firebaseio.com",
    projectId: "numbersnunits",
    storageBucket: "numbersnunits.appspot.com",
    messagingSenderId: "669587148335"
};

//firebase.initializeApp(config);

var loginRouter = require('./routes/login');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var lengthRouter = require('./routes/lengthconverter');
var weightRouter = require('./routes/weightconverter');
var volumeRouter = require('./routes/volumeconverter');
var timeRouter = require('./routes/timeconverter');
var temperatureRouter = require('./routes/temperatureconverter');
var currencyRouter = require('./routes/currencyconverter');
var numberRouter = require('./routes/numberinfo');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/', loginRouter);
app.use('/home', indexRouter);
app.use('/users', usersRouter);
app.use('/length', lengthRouter);
app.use('/weight', weightRouter);
app.use('/volume', volumeRouter);
app.use('/time', timeRouter);
app.use('/temperature', temperatureRouter);
app.use('/currency', currencyRouter);
app.use('/number', numberRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(7000, function () {
    console.log('Example app listening on port 7000!')
});

module.exports = app;
