'use strict';

let promise = (x) => {
	return new Promise((resolve, reject) => {
		if(!x) reject('wrong element');
		resolve(x);
	});
}

promise(0)
.then(
	goodRes => console.log(goodRes),
	badRes => console.log('idiot')
	);

let prom = new Promise((resolve, reject) => {
	if(!2) reject('wrong element');
	resolve(2);
});

console.log(prom);