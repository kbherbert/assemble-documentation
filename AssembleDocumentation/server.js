var grunt = require('grunt');
process.chdir(__dirname);
var config = require('./Gruntfile');
config(grunt);
console.log('Minifying...');
grunt.tasks(['default']);