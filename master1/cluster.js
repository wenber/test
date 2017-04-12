var cluster = require('cluster');

if (cluster.isMaster) {
  var worker = cluster.fork();
  
  worker.on('message', function(msg){
    console.log(msg);
  });
  worker.send('from master: hi there');
} 

if (cluster.isWorker) {
  process.on('message', function(msg) {
    console.log(msg);
    process.send('from worker: hi there');
  });
}