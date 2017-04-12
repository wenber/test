define(function (require, exports, module) {
console.log('a starting');
var b = require('./b.js');
console.log('in a, b.done = %j', b.done);
exports.done = 999;
console.log('a done');
});