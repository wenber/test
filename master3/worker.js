// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, {
//         'Content-Type': 'text/plain'
//     });
//     res.end('Hello\n');
// }).listen(Math.round(Math.random() * 10) + 8000, '127.0.0.1')




// var http = require('http');
// var server = http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('handled by child, pid is: ' + process.pid + '\n');
// });

// var worker;
// process.on('message', function (mes, tcp) {
//     if (m === 'server') {
//         worker = tcp;
//         worker.on('connection', function (socket) {
//             server.emit('connection', socket);
//         });
//     }
// });

// process.on('uncaughtException',  function () {
//     worker.close(function () {
//         process.exit(1);
//     });
// });

var http = require('http');
var a = 7000;
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello\n');
}).listen(++a, '127.0.0.1')