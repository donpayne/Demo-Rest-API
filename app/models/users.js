
// Modules
// **********************************************************************************
var config   = require('../../config/config');
var mongoose = require('mongoose');

// Schema
var schema = new mongoose.Schema(
{
	firstName    : { type: String },
	lastName     : { type: String },
	active       : { type: Boolean }
}, 
{ collection: 'users' });

// Module Export
// **********************************************************************************
module.exports = config.connection.model('Users', schema, 'users');
