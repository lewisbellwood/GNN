var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser'),
    stylus = require('stylus'),
    nib = require('nib'),
    mongojs = require("mongojs"),
    http = require("http");

var routes = require('./routes/index');
var users = require('./routes/users');





var app = express();

var multipart = require('connect-multiparty');

app.use(multipart({
    uploadDir: 'uploads'
}));

// exports.create = function (req, res, next) {
//     var data = _.pick(req.body, 'type')
//         , uploadPath = path.normalize(cfg.data + '/uploads')
//         , file = req.files.file;

//         console.log(file.name); //original name (ie: sunset.png)
//         console.log(file.path); //tmp path (ie: /tmp/12345-xyaz.png)
//     console.log(uploadPath); //uploads directory: (ie: /home/user/data/uploads)
// };





// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use( bodyParser.json() ); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});




// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});



module.exports = app;
