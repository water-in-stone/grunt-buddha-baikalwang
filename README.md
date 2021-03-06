# grunt-buddha-baikalwang

> Buddha\'s grace illuminates code as sunshine

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-buddha-baikalwang --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-buddha-baikalwang');
```

## The "buddha_baikalwang" task

### Overview
In your project's Gruntfile, add a section named `buddha_baikalwang` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  buddha_baikalwang: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.separator
Type: `String`
Default value: `buddha`

指明让神兽还是佛珠来保佑我们的代码

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `//`

文件中拼接佛祖或神兽时使用的注释符

A string value that is used to do something else with whatever else.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  buddha_baikalwang: {
    options: {
      'who' : 'buddha',
      'commentSymbol' : '//'
    },
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  buddha_baikalwang: {
    options: {
      separator: ': ',
      punctuation: ' !!!',
    },
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
2016.06.05 &nbsp;&nbsp;&nbsp;v0.0.1&nbsp;&nbsp;&nbsp;
_(Nothing yet)_
