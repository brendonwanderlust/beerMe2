var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var models = require('./models');
var hbs = require('express-handlebars');
const Sequelize = require('sequelize'); //added sequelize lines 10 + 11
const sequelize = new Sequelize('postgres://postgres@localhost:3000/beerMe2'); 


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const setupAuth = require('./auth') //g: uncommented this

var appRouter = require('./routes/app');

var app = express();

// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

setupAuth(app); //g: uncommented

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/app', appRouter);

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

module.exports = app;
