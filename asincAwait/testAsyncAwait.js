'use strict';

const div = (x, y) => {
	return new Promise((resolve, reject) => {
		if(y === 0) reject('error');
		resolve(x / y);
	});
}


const play = (...args) => {
	try {
		args.forEach(async (fn) => {
			console.log(await fn);
		});
	} catch(err) {
		console.log('suck it');
	}
};

play(div(4, 2), div(4, 0));
