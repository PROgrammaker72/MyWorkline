'use strict';

const fs = require('fs');

const readFile = (url) => {
	return new Promise((resolve, reject) => {
		fs.readfile(url, 'utf8', (err, data) => {
			if(err) reject(err);
			resolve(data);
		});
	});
}

readfile('./1-quest.js')
	.then(
		result => console.log(result),
		err => console.log(err)
	);

