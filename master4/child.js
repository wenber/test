process.on('message', function (m, server) {
    if (m === 'server') {
        server.on('connection', function (socket) {
            socket.end('handled by child \n');
            socket.write('handled by child \n');
        });
    }
});