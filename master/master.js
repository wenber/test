#! /usr/bin/env node
var fork = require('child_process').fork;
var cpus = require('os').cpus();
cpus.forEach(function () {
    fork('./worker.js');
});
