'use strict';

let a = 1, b = 0, x;

//выводит число Фибоначи под номером n;
function fn(n) {
  n--;
  if (n === 0) return a;
  x = a + b;
  b = a;
  a = x;
  return fn(n);
}

console.log(fn(77));
