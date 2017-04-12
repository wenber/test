var fork = require('child_process').fork;
var cpus = require('os').cpus();
var server = require('net').createServer();
server.listen(1337);

var workers = {};
var createWorker = function () {
    var worker = fork(__dirname + '/worker.js');
    worker.on('exit', function () {
        console.log('Worker ' + worker.pid + ' exited');
        delete workers[worker.pid];
        createWorker();
    })

    worker.send('server', server);
    workers[worker.pid] = worker;
    console.log('Create worker pid: ' + worker.pid);
}

cpus.forEach(function () {
    // createWorker();
});

process.on('exit',  function () {
    workers.forEach(function (pid) {
        workers[pid].kill();
    });
})

console.log(98)

