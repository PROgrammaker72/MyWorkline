'use strict';

const fs = require('fs');
const promisify = require('./conect.js');
const readFile = promisify(fs.readFile);

const playAll = (...args) => {
  args.forEach(async (fn) => { //because it can`t see await in function. "async" and "await" must be in one function!
    try {
      console.log(await fn);
    } catch (err) {
      console.log(err.message);
    }
  });
};

playAll(readFile('conect.js', 'utf8'), readFile('asyncBetter.js', 'utf8'),
  readFile('conect.js', 'utf8'), readFile('asyncReadFile.js', 'utf8'));
