
// Modules
// **********************************************************************************
var config     = require('../../config/config');
var controller = require('../controllers/api.controller');
var router     = require('express').Router();

// Module Export
// **********************************************************************************
module.exports = function ()
{
	"use strict";

	// Routes
	router.route('/').get(controller().get);
	router.route('/v1/').get(controller().get);

	return router;
};
