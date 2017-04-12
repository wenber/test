/**
 * @file AST demo
 * @author Ming Liu(liuming07@baidu.com)
 */

/* global process */
var fs = require('fs');
var path = process.argv[2];
var source = fs.readFileSync(path, 'utf-8');

// require
var esprima = require('esprima');


// 第一步：生成AST
var ast = esprima.parse(source);

// console.dir(ast);
console.dir(ast.body[0]);

