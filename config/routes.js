
// Modules
// **********************************************************************************
var app          = require('../app');
var config       = require('./config');
var getRouteName = require('./lib/getRouteName');
var restify      = require('express-restify-mongoose');
var router       = require('express').Router();
var Promise      = require('bluebird');
var fs           = Promise.promisifyAll(require('fs'));
var _            = require('lodash');

// Initialize Routes
// **********************************************************************************
module.exports = function ()
{
	"use strict";

	// Static Routes
	return fs.readdirAsync(config.path.app.routes).then(function (routes)
	{
		return Promise.map(routes, function (filename)
		{
			var route      = getRouteName(filename, 'route');
			var controller = require(config.path.app.routes + '/' + filename);
			return Promise.resolve(app.use(route, controller()));
		});
	})
	// Dynamic REST API Routes
	.then(function ()
	{
		return Promise.map(_.values(config.connection.models), function (model)
		{
			return restify.serve(router, model, preMiddleware(model.modelName));
		});
	})
	// Register the Router
	.then(function ()
	{
		return app.use(router);
	});
};

// Private Methods
// **********************************************************************************
function preMiddleware (modelName)
{
	switch (modelName)
	{
		case 'TestHistory':
			return;
		default:
			return { preMiddleware: readOnly };
	}
}

function readOnly (req, res, next)
{
	if (req.method !== 'GET')
	{
		res.status(401);
		res.send('This collection is readonly');
	}
	else
	{
		next();
	}
}
