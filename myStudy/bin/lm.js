#!/usr/bin/env node

/**
* Module dependencies.
*/

// var program = require('commander');
// 
// program
//     .version('0.0.1')
//     .option('-a, --pineapple', 'Add pineapple')
//     .option('-b, --bbq', 'Add bbq sauce')
//     .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
//     .parse(process.argv);
// 
// console.log('you ordered a pizza with:');
// 
// if (program.peppers) {
//     console.log('  - peppers');
// }
// if (program.pineapple) {
//     console.log('  - pineapple');
// }
// if (program.bbq) {
//     console.log('  - bbq');
// }
// console.log('  - %s cheese', program.cheese);
// console.log(process.argv);
// process.exit(9);
// process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(data) {
    process.stdout.write(data);
});