
// Modules
var _ = require('lodash');

// Generate route name based on route filename
module.exports = function transformFilenameIntoRoute (filename, label)
{
	"use strict";

	return _.chain(filename)
			.split('.')
			.dropRight()
			.dropRightWhile(label? _.matches(label) : _.stubfalse)
			.unshift('')
			.join('/')
			.replace(/index/, '')
			.value();
};