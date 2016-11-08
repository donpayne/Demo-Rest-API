
// Modules
// **********************************************************************************
var	path    = require('path');
var root    = process.env.DEMO_HOME || path.resolve('.');
var _       = require('lodash');

// Env Variables
// **********************************************************************************
process.env.PORT     = process.env.PORT || 3000;
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

// Config Object
// **********************************************************************************
var config = module.exports =
{
	path:
	{
		config: 
		{
			init          : path.join(root, 'config', 'init'),
			connection    : path.join(root, 'config', 'connection'),
			models        : path.join(root, 'config', 'models'),
			routes        : path.join(root, 'config', 'routes'),
			server        : path.join(root, 'config', 'server')
		},
		app:
		{
			controllers   : path.join(root, 'app', 'controllers'),
			models        : path.join(root, 'app', 'models'),
			routes        : path.join(root, 'app', 'routes')
		}
	},
	setProperties: setProperties
};

config.setProperties = function (options)
{
	'use strict';

	return _.assign(this, options);
};
