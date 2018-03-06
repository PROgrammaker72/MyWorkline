'use strict';

const EventEmitter = require('./4-quest.js');

class MyEmitter extends EventEmitter {
	emit(...args) {
		if(args[0] !== 'AnyEv') super.emit(...args);
		args.unshift('AnyEv');
		super.emit(...args);
	}
};

const ee = new MyEmitter();

ee.on('firstEv', function(data) {
	console.log(data);
});

ee.on('AnyEv', function(...anyArgs) {
	console.log(`I'l play your data: ${anyArgs}`);
});

ee.on('error', function(data) {
	console.log(new Error(data));
})

ee.emit('firstEv', 'Hello');
ee.emit('AnyEv', 'KPI');
ee.emit('error', 'your code is shit');

