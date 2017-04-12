#! /usr/bin/env node

var Promise = require('promise');

Promise.resolve('3')
    .then(
        function (res) {
            console.log('1res' + res);
            try {
                throw new Error('3432')
            }
            catch (e) {
                console.log('try: ' + e)

            }
        },
        function (err) {
            console.log('1err' + err)
        }
    )
    .catch(function (e) {
        returnconsole.log('catch1: ' + e);
    })
    .then(
        function (res) {
            console.log('2res' + res)
        },
        function (err) {
            console.log('2err' + err)
        }
    )
    .catch(function (e) {
        console.log('catch2: ' + e);
    })