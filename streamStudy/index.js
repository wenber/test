var http = require('http');
var fs = require('fs');
// var oppressor = require('oppressor');

var server = http.createServer(function (req, res) {
    // fs.readFile(__dirname + '/a.txt', function (err, data) {
    //     console.log(__dirname);
    //     res.end(data + '\n');
    // });
    var stream = fs.createReadStream(__dirname + '/a.txt');
    stream.pipe(res);
});
server.listen(8000);
