'use strict';

const http = require('http');

const server = http.createServer((req, res) => {
	res.write('Hello world');
});

server.listen(8000, () => {
	console.log('listening on http://localhost:8000');
});