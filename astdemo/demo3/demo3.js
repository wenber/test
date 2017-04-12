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
var estraverse = require('estraverse');
var escodegen = require('escodegen');

// 第一步：生成AST
var ast = esprima.parse(source);

// 第二步：操作AST
estraverse.traverse(ast, {
    enter: function (node, parent) {
        if (node.type === 'BinaryExpression') {
            node.operator = '+';
            // 不再继续遍历
            this.break();
        }
    },
    leave: function (node, parent) {}
});
// 第三补：生成代码
var code = escodegen.generate(ast);
fs.writeFile('code.js', code, 'utf-8');
