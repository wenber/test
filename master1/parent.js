var fork = require('child_process').fork;
var child1 = fork('./child');
var child2 = fork('./child');

var server = require('net').createServer();
server.listen(1337, function () {
    child1.send('server', server);
    child2.send('server', server);

    server.close();
})