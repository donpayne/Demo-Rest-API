
// Modules
// **********************************************************************************
var express        = require('express');
var bodyParser     = require('body-parser');
var compress       = require('compression');
var favicon        = require('serve-favicon');
var methodOverride = require('method-override');
var http           = require('http');
var path           = require('path');

// Set Configs
// **********************************************************************************
var config = require('./config/config');

// Application
// **********************************************************************************
var app = module.exports = express();
app.set('port', process.env.PORT);
app.use(favicon(path.join(__dirname + '/public/img/favicon.ico')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(compress());
app.use(express.static(path.join(__dirname + '/public')));

// development error handler
// will print stacktrace
// **********************************************************************************
if (app.get('env') === 'development')
{
	app.use(function (err, req, res, next)
	{
		res.status(err.status || 500);
		res.render('error', 
		{
			status  : err.status,
			message : err.message,
			error   : err
		});
	});
}

// production error handler
// **********************************************************************************
app.use(function (err, req, res, next)
{
	res.status(err.status || 500);
	res.render('error',
	{
		status  : err.status,
		message : err.message,
		error   : {}
	});
});

// Initialize App
// **********************************************************************************
require(config.path.config.init)();
