'use strict';

function resolve(el) {
	this.resolve = el;
}

function reject(el) {
	this.reject = el;
}

class Promise {
	constructor(fn) {
		const res = resolve.bind(this);
		const rej = reject.bind(this);
		fn(res, rej);
	}

	then(fn1, fn2) {
		if(this.resolve) fn1(this.resolve);
		if(this.reject) fn2(this.reject);
	}

	catch(er) {
		if(this.reject) er(this.reject);
	}
}

//usage:

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