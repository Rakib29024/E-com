var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var exphbs  = require('express-handlebars');
var session = require('express-session'),
    // LocalStrategy = require("passport-local"),
    // passportLocalMongoose = require("passport-local-mongoose"),
    passport = require("passport");

//local set
var db_connection=require('./database/db_conection');
var User=require('./models/user');
//require routes
var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');
app.engine( '.hbs', exphbs( {
  extname: '.hbs',
  defaultView: 'frontend/index',
  defaultLayout: 'frontend/layout',
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/layouts/'
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//set session
app.use(session({
  secret:"Miss white is my cat",
  resave: false,
  saveUninitialized: false
}));

//passport initialize
passport.use(User.createStrategy());
// app.use(passport.initialize()); 
// app.use(passport.session()); 
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//mount routes set up
app.use('/', indexRouter);
// app.use('/users', usersRouter);

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
