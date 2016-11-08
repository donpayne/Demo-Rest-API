
// Modules
// **********************************************************************************
var	app     = require('../app');
var config  = require('./config');
var	http    = require('http');

// Initialize Routes
// **********************************************************************************
module.exports = function ()
{
	// Create App Server
	var server = http.createServer(app).listen(app.get('port'))

		.on('error', function (err) 
		{
			if (err.syscall !== 'listen')
			{
				throw err;
			}

			var port = app.get('port');
			var bind = (typeof port === 'string')? 'Pipe ' + port : 'Port ' + port;

			// handle specific listen errors with friendly messages
			switch (err.code) 
			{
				case 'EACCES':
					console.error(bind + ' requires elevated privileges');
					process.exit(1);
					break;
				case 'EADDRINUSE':
					console.error(bind + ' is already in use');
					process.exit(1);
					break;
				default:
					throw err;
			}
		})
		.on('listening', function () 
		{
			var addr = server.address();
			var bind = (typeof addr === 'string')? 'pipe ' + addr : 'port ' + addr.port;
			console.log('Express server listening on ' + bind);
		});
};
