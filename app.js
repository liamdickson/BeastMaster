var express = require('express');
var fs = require('fs');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var webpackConfig = require('./webpack.config.js');
var proxy = require('simple-http-proxy');
var config = require('./src/config');
var webpackDevMiddleware;
var webpack;

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

if (app.get('env') === 'development') {
    webpackDevMiddleware = require('webpack-dev-middleware');
    webpack = require('webpack');
    webpackConfig.devtool = '#inline-source-map';
    app.use(webpackDevMiddleware(webpack(webpackConfig), {
        noInfo: true,
        publicPath: '/javascripts'
    }));
}

app.use(express.static(path.join(__dirname, 'public')));

app.get('/data/*', function(req, res){
    res.setHeader("content-type", "text/json");
    fs.createReadStream("."+req.url).pipe(res);
});

app.use(function(req, res, next) {
    res.render('index');
});


module.exports = app;