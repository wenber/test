#!/usr/bin/env node
 
/**
 * Module dependencies.
 */
 
// var exec = require('child_process').exec;
 
// var spawn = require('child_process').spawn;


//     free  = spawn('ls', ['-a']);

// 捕获标准输出并将其打印到控制台
// free.stdout.on('data', function (data) {
//     console.log('标准输出：\n' + data);
// });

// // 捕获标准错误输出并将其打印到控制台
// free.stderr.on('data', function (data) {
//     console.log('标准错误输出：\n' + data);
// });

// 注册子进程关闭事件
// process.on('exit', function (code, signal) {
//     console.log('子进程已退出，代码：' + code);
// });
// var os = require('os');
// console.dir(os.networkInterfaces());

var content = require('fs').readFileSync('../fcserver/lib/util/a.js', 'utf8');
var arr = content.split('\n');
arr.forEach(function (content, index) {
    content = content.split(/\s+/);
    content[1] = content[1] + ':';
    content[2] = "'" + content[2] + "'";
    content.shift();
    content = content.join(' ') + ',';
    console.log(content)
})
