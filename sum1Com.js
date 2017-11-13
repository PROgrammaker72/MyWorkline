'use strict';

function summator(...args) {
	let result = 0;
	for (let i = 0; i < args.length; i++) {
		result += arguments[i];
	}

	return result; 
}

console.log(summator(1, 2, 3, 4, 5));
