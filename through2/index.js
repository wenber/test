const fs = require('fs');
const through2 = require('through2');

fs.createReadStream('./a.txt')
    // chunk是a.txt转化成Buffer的数组
    .pipe(through2(function(chunk, enc, callback) {
        // for (var i = 0; i < chunk.length; i++) {
        //     console.log(chunk[i])
        // }
        // console.log(chunk.length);
        // this can be called as many times as required before the callback() if you have multiple pieces to send on.
        // this.push(chunk);
        // call the callback function to indicate that the transformation is done
        callback(null, chunk);
    }),
     function (callback) { // flush function
      this.push('tacking on an extra buffer to the end');
      callback();
    })
    .pipe(fs.createWriteStream('./out.txt'))