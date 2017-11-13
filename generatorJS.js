'use strict';

const fm = (x, y, z) => x + y + z;

const f = fm.bind(null, 3);
const k = f.bind(null, 6);

console.log(k(7));
