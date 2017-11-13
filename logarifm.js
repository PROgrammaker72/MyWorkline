'use strict';

/*const createLog = (base, n) => Math.log(n) / Math.log(base);

const lg = n => createLog(10, n);*/

const createLog = base => n => Math.log(n) / Math.log(base);

const lg = createLog(10);

console.log(lg(10));
