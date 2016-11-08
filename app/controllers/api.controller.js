
// Modules
var config = require('../../config/config');
var _      = require('lodash');

// API Controller
module.exports = function ()
{
	'use strict';

	return {
		get : function (req, res)
		{
			res.status(200);
			res.json(_.map(config.connection.models, function (model)
			{
				return {
					resource : _.camelCase(model.modelName),
					links    :
					{
						self : 'http://' + req.headers.host + req.baseUrl + '/v1/' + _.camelCase(model.modelName)
					}
				};
			}));
		}
	};
};
