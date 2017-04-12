var http = require('http');
var port  = Math.round(Math.random() * 90 + 6000);
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello World\n');
}).listen(3000 , '127.0.0.1');


// var net = require('net');
// var server = net.createServer(function(c) { // 'connection' 监听器
//   console.log('服务器已连接');
//   c.on('end', function() {
//     console.log('服务器已断开');
//   });
//   c.write('hello\r\n');
//   c.pipe(c);
// });
// server.listen(5656, function() { // 'listening' 监听器
//   console.log('服务器已绑定');
// });