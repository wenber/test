var fork = require('child_process').fork;
var child = fork('./child');

var server = require('net').createServer();

// 可能触发事件
server.on('connection', function (socket) {
    socket.write('connection \n');
});

server.listen(1337, function () {
    // 可能触发回调
    child.send('server', server);
});