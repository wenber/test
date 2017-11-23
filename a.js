// process.stdin.resume();
// process.stdin.setEncoding('utf8');
// var a = '';
// process.stdin.on('data', function (trunk) {
//     a += trunk;
//     console.log(typeof trunk);
//     // process.stdout.write('a: ' + a);
//     if (trunk === 'bye\n') {
//         process.stdin.emit('end');
//     }
// });

// process.stdin.on('end', function () {
//     process.stdout.write('end\n');
// })
//

var fs = require('fs')
var request = require('request');
// request('http://www.baidu.com', function (error, response, body) {
//   // if (!error && response.statusCode == 200) {
//   //   console.log(body) // Show the HTML for the Google homepage.
//   // }
//   // else {
//     response.pipe(fs.createWriteStream('./a.html'), body);
//   // }
// })

request('http://www.baidu.com').pipe(fs.createWriteStream('./a.html'));


// var fs = require('fs');
// var readStream = fs.createReadStream('aa.html');
// var writeStream = fs.createWriteStream('a.html');

// readStream.on('data', function(chunk) { // 当有数据流出时，写入数据
//     writeStream.write(chunk);
// });

// readStream.on('end', function() { // 当没有数据时，关闭数据流
//     writeStream.end();
// });
//
//
//
//