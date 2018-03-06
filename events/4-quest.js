'use strict';

class EventEmitter {
	constructor() {
		this.events = {};
	}

	on(name, fn) {
		const ev = this.events[name];
		this.events[name] = ev || [];
		this.events[name].push(fn);
	}

	emit(name, ...data) {
		const check = this.events[name];
		const boolean = !!check;
		if(boolean) check.forEach(fn => fn(...data));
		return boolean;
	}
}

module.exports = EventEmitter;

	
