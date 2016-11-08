
// Modules
// **********************************************************************************
var config       = require('./config');
var mongoose     = require('mongoose');
var Promise      = mongoose.Promise = require('bluebird');

// Module Export
// **********************************************************************************
module.exports = function mongodbConn ()
{
	'use strict';

	return new Promise(function (resolve, reject)
	{
		var conn = mongoose.createConnection('mongodb://hostname:27017/dbname')
			.on('error', function (err)
			{
				reject(err);
			})
			.on('connected', function ()
			{
				config.setProperties({ connection: conn });
				resolve(conn);
			});
	});
};
