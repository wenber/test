const fs = require('fs');

// const readable = fs.createReadStream('./a.js');
// const writeable = fs.createWriteStream('./b.js');
// readable.pipe(writeable);
//
fs.mkdir('aa.js', function(err) {
    if (err) {
        console.log(err);
    }
});