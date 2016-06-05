/*
 * grunt-buddha-baikalwang
 * https://github.com/water-in-stone/grunt-buddha-baikalwang
 *
 * Copyright (c) 2016 Young
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested) by default.
    buddha_baikalwang: {
      options: {
        who: 'buddha',// buddha alpaca
        commentSymbol: '//'
      },

      dist: ['test/fixtures/*.js']

      //因为要自定义配置，所以先删除默认的
      /*default_options: {
       options: {
       },
       files: {
       //将数组中的两个文件的内容输出合并到key中所指定的地址
       'tmp/default_options': ['test/fixtures/testing', 'test/fixtures/123']
       }
       },
       //自定义配置项
       custom_options: {
       options: {
       separator: ': ',
       punctuation: ' !!!'
       },
       files: {
       'tmp/custom_options': ['test/fixtures/testing', 'test/fixtures/123']
       }
       }*/
    },

    // Unit tests.
    nodeunit: {
      //指明使用的测试脚本
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).，是一个本地加载任务的方法，因为这里我们的插件还没有发布
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'buddha_baikalwang', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
