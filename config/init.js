
// Modules
// **********************************************************************************
var	app     = require('../app');
var config  = require('./config');
var Promise = require('bluebird');

var initializeConnection  = require(config.path.config.connection);
var initializeModels      = require(config.path.config.models);
var initializeRoutes      = require(config.path.config.routes);
var initializeServer      = require(config.path.config.server);

// Module Exports
// **********************************************************************************
module.exports = function ()
{
	'use strict';

	return Promise.resolve()
		.then(initializeConnection)
		.then(initializeModels)
		.then(initializeRoutes)
		.then(initializeServer)
		.catch(function (err)
		{
			throw err;
		});
};
