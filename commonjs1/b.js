define(function (require, exports, module) {
console.log('b starting');
exports.done = 1;
var a = require('./a.js');
console.log('in b, a.done = %j', a.done);
exports.done = true;
console.log('b done');
});