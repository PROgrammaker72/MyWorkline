'use strict';

module.exports = (reader) => (...args) => new Promise((resolve, reject) => {
  args.push((err, data) => {
    if (err) reject(err);
    resolve(data);
  });
  reader(...args);
});
