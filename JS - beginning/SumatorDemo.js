'use strict';

const fn = x => y => {
  if (y !== undefined) {
    const z = x + y;
    return fn(z);
  }
  return x;
};

console.log(fn(1)(2)(3)(4)(3)());
