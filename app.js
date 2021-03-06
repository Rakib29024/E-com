var createError = require('http-errors');
var express = require('express');
var displayRoutes = require('express-routemap');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var exphbs  = require('express-handlebars');
var passport = require("passport"),
    session = require('express-session');
    LocalStrategy = require("passport-local").Strategy;
const {SECRATE} =require('./config/index');

//local set
require('./database/db_conection');
// passport requirement
require('./config/passport');

//models register
var User=require('./models/user');
require('./models/category');


//require routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');
var adminRouter = require('./routes/admin');


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


//set passport session
app.use(session({
  name: 'secrate-session',
  secret: SECRATE,
  saveUninitialized: true,
  resave: true,
  cookie:{
    maxAge:1000*60*60*24
  }
}));


//passport initialize
app.use(passport.initialize()); 
app.use(passport.session()); 

app.use((req,res,next)=>{
  console.log(req.session);
  // console.log(req.user);
  // displayRoutes(app);
  next();
});


//mount routes set up
app.use(indexRouter);
app.use(usersRouter);
app.use('/admin', adminRouter);
//defaault route filter
app.get('*',(req,res)=>{
  res.redirect('/');
});


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
