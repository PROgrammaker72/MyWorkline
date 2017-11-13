'use strict';

const createSqrt = sqrt => x => Math.pow(x, 1/sqrt);

const rt4 = createSqrt(4);

console.log(rt4(16));
