var Hapi = require('hapi');

var server = new Hapi.Server(8888, { files: { relativeTo: process.cwd() } });

server.route({
	path: '/{file*}',
	method: 'GET',
	handler: {
		directory: {
			path: 'assets/',
		}
	}
});

server.start(function(err) {
	console.log('server started on port 8888');
});