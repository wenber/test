#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

// exports.read = function (filePath) {
//     // 获取目标文件
//     if (!filePath) {
//         edp.log.error('必须指定一个输入文件！');
//         return;
//     }

//     if (filePath[0] != '~') {
//         filePath = path.resolve('.', filePath);
//     }

//     if (!fs.existsSync(filePath)) {
//         edp.log.error('指定的输入文件不存在！路径为：' + filePath);
//         return;
//     }
//     var fileName = filePath.split('/');
//     fileName = fileName[fileName.length - 1];

//     var fileData = fs.readFileSync(filePath, {
//         encoding: 'UTF-8'
//     });

//     return {
//         name: fileName,
//         data: fileData
//     }
// }

var filePath = process.argv.slice(2)[0];

filePath = path.resolve('.', filePath)
var fileData = fs.readFileSync(filePath, {
    encoding: 'UTF-8'
});

console.log(path.basename(filePath, path.extname(filePath)));