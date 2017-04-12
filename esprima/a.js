var esprima = require("esprima");
var a = 'var a = {location: /\/request\.ajax/, handler: mock.request()}';
console.log(esprima.parse(a));