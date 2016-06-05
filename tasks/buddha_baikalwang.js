/*
 * grunt-buddha-baikalwang
 * https://github.com/water-in-stone/grunt-buddha-baikalwang
 *
 * Copyright (c) 2016 Young
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');//调用node的path模块

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('buddha_baikalwang', 'Buddha\'s grace illuminates code as sunshine', function () {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      who: 'buddha',
      commentSymbol: '//'

      /*punctuation: '.',
       separator: ', '*/
    });

    var testExistRegexMap = {
      'buddha': /o8888888o/,
      'alpaca': /┗┓┓┏━┳┓┏┛ + + + +/
    };
    var who = options.who;
    var commentSymbol = options.commentSymbol;
    var commentFilePathMap = {
      'buddha': 'assets/buddha.txt',
      'alpaca': 'assets/alpaca.txt'
    };
    var commentFilePath = path.join(__dirname, commentFilePathMap[who]);
    var commentContent = grunt.file.read(commentFilePath);
    var lineCommentArr = commentContent.split(grunt.util.normalizelf('\n'));
    lineCommentArr.forEach(function (value, index, array) {
      array[index] = commentSymbol +  value;
    });
    commentContent = lineCommentArr.join(grunt.util.normalizelf('\n'));

    // Iterate over all specified file groups.
    this.files.forEach(function (f) {
      // Concat specified files.
      //这里的f.src是一个数组，即 Array.isArray(f.src) === true
      f.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false; //当前的元素不添加到数组中
        } else {
          return true; //当前的元素被添加到数组中
        }
      }).map(function (filePath) {

        //读取原先文件并添加佛祖注释
        var originalFileContent = grunt.file.read(filePath),
          newFileContent = commentContent + grunt.util.normalizelf('\n') + originalFileContent;
        //若当前文件已经添加过神兽/佛祖注释，则直接返回
        if (testExistRegexMap[who].test(originalFileContent)) {
          return;
        }
        grunt.file.write(filePath, newFileContent);

        //实现对每个数组对象的遍历，并返回包含了操作每一个元素之后的数组
        /*// Read file source.
         return grunt.file.read(filepath);*/
      });
      /*//join方法将数组元素的内容进行拼接，normalizelf将换行符转为适配当前系统下的换行符
       .join(grunt.util.normalizelf(options.separator));*/

      /*
       // Handle options.
       src += options.punctuation;

       // Write the destination file.
       grunt.file.write(f.dest, src);
       */

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
