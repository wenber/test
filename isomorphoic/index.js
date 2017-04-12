var fs = require('fs');
// var document = require('global/document');

function up(name, done) {
    fs.readFile(name, function (error, file) {
        done(null, file.toString());
    })
}


up('./a.json', function (error, file) {
    console.log(file);
});
// var ul = document.createElement('ul');
// a.forEach(function (name) {
//     var li = document.createElement('li');
//     li.innerText = name;
//     ul.appendChild(li);
// })
// console.log(ul.toString());
// document.body.appendChild(ul.toString());