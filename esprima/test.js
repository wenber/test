/**
 * @file AST demo
 * @author Ming Liu(liuming07@baidu.com)
 */

/* global process */
var fs = require('fs');
var path = process.argv[2];
var source = fs.readFileSync(path, 'utf-8');

// require三剑客
var esprima = require('esprima');
var estraverse = require('estraverse');
var escodegen = require('escodegen');

// 第一步：生成AST
var ast = esprima.parse(source);

// 第二步：执行操作
estraverse.traverse(ast, {
    enter: function (node, parent) {
        if (node.type === 'ExpressionStatement') {

            estraverse.traverse(node, {
                enter: function (node, parent) {
                    if (node.type === 'AssignmentExpression' && node.left.property.name === 'a') {
                        var insetJs = 'Universe.prototype.b = 2;';
                        var insertAst = esprima.parse(insetJs).body[0];
                        ast.body.splice(2, 0, insertAst);
                        this.break();
                    }
                },
                leave: function (node, parent) {
                }
            });
        }
    },
    leave: function (node, parent) {
    }
});

// 第三步：回写源文件
source = escodegen.generate(ast);
fs.writeFileSync('./ast.js', source, 'utf-8');
