var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var http = require('http').Server(app);
var io = require('socket.io')(http);
var sockets = require('./src/sockets/base');

//for serrion handling
var session = require('express-session');

//local
var controller = require('./src/controller/base');
var env = require('./config/environment');

//connect mongodb
// var mongoConnect = require('./config/connection');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public/asset/images/favicon', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//attatch the routers to the app
controller.attatch(app);
//attatch listener to io
sockets.attatch(io);

// http.listen(3000, function(){
//   console.log('listening on *:3000');
//});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
env.attatch(app);

module.exports = {
    app: app,
    io: io
};
