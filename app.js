var express = require('express'); // get express
var path = require('path'); // get path (working with file and dir)
var favicon = require('serve-favicon'); // get icon
var logger = require('morgan'); // log midware
var cookieParser = require('cookie-parser'); // work with browser cookie
var bodyParser = require('body-parser'); // request parsing midware

var index = require('./routes/index');
var users = require('./routes/users');

//new added
var something = require('./routes/something');
var manbook = require('./routes/manbook');
var app = express();
var login = require('./routes/login')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

//new added
app.use('/something', something);
app.use('/manbook', manbook);
app.use('/manbook/login', login);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
