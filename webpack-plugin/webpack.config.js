/**
 * webpack 配置
 * @author Liuming
 * @Date 2016-11-04
 */

const path = require('path');
const HelloWorldPlugin = require('./plugins/helloWorld');

module.exports = {
    entry: {
        entry: [
            path.resolve(__dirname, './index.js')
        ],
    },
    output: {
        path:  path.resolve(__dirname, './build'),
        filename: 'index.js'
    },
    plugins: [
        new HelloWorldPlugin({options: true})
    ]
}
