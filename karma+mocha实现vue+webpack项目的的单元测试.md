# karma+mocha实现vue+webpack项目的的单元测试
### karma与mocha的简介
Karma是一个基于Node.js的JavaScript测试执行过程管理工具（Test Runner）。该工具在Vue中的主要作用是将项目运行在各种主流Web浏览器进行测试。
换句话说，它是一个测试工具，能让你的代码在浏览器环境下测试。需要它的原因在于，你的代码可能是设计在浏览器端执行的，在node环境下测试可能有些bug暴露不出来；另外，浏览器有兼容问题，karma提供了手段让你的代码自动在多个浏览器（chrome，firefox，ie等）环境下运行。如果你的代码只会运行在node端，那么你不需要用karma。karma适用的场景总结如下：
> * 在真实的浏览器环境中测试代码
> * 在不同的浏览器中测试代码（pc端，移动端，平板等）
> * 在开发时在本地执行测试
> * 在持续集成服务器上执行测试
> * 在每一次修改保存后执行测试
> * 想使用Istanbul自动生成覆盖率报告
> * 源代码文件使用 RequireJS

mocha是一个测试框架。可结合chai断言库使用
## 安装配置
因为karma是要在命令中运行的，所以先安装karma-cli：npm install -g karma-cli
### 安装karma:
npm install karma --save-dev
### karma init
在项目根目录执行：karma init，根据提示进行相应的操作，如下图所示：
![karma init相关操作][1]

执行完后，在项目的根目录下会生成一个karma.conf.js文件
安装所需要的其它插件：chai，isparta，istanbul-instrumenter-loader，karma-chrome-launcher，karma-coverage，karma-coverage-istanbul-reporter，karma-mocha，karma-sinon-chai，karma-source-map-support，karma-webpack，mocha，sinon，sinon-chai
### 修改karma.conf.js配置文件
```
// Karma configuration
// Generated on Fri Oct 12 2018 16:38:07 GMT+0800 (GMT+08:00)
var webpackConfig = require('./build/webpack.test.config');
const path = require('path');
module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'sinon-chai'],
        // webpack: webpackConfig,


        // list of files / patterns to load in the browser
        files: [
            'test/unit/**/*.spec.js'
        ],


        // list of files / patterns to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'test/unit/**/*.spec.js': ['webpack', 'coverage']
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['coverage-istanbul'],
        coverageIstanbulReporter: {
            // reports can be any that are listed here: https://github.com/istanbuljs/istanbuljs/tree/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib
            reports: ['html', 'lcovonly', 'text-summary'],

            // base output directory. If you include %browser% in the path it will be replaced with the karma browser name
            dir: path.join(__dirname, 'test/report/unit'),

            // Combines coverage information from multiple browsers into one report rather than outputting a report
            // for each browser.
            combineBrowserReports: true,

            // if using webpack and pre-loaders, work around webpack breaking the source path
            fixWebpackSourcePaths: true,

            // Omit files with no statements, no functions and no branches from the report
            skipFilesWithNoCoverage: true,

            // Most reporters accept additional config options. You can pass these through the `report-config` option
            'report-config': {
                // all options available at: https://github.com/istanbuljs/istanbuljs/blob/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib/html/index.js#L135-L137
                html: {
                    // outputs the report in ./coverage/html
                    subdir: 'html'
                }
            }
        },

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,
        webpack: webpackConfig,
        plugins: ['karma-*']
    })
}
```
### webpack.test.config.js文件配置如下：
```
var path = require("path")
var webpack = require("webpack")
var ExtractTextPlugin = require('extract-text-webpack-plugin')

function resolve(dir) {

    return path.join(__dirname, '..', dir)
}

var webpackConfig = {

    module: {

        rules: [

            // babel-loader
            {
                test: /\.js$/,
                // use: 'babel-loader',
                //统计测试覆盖率
                use: [{
                    loader: "istanbul-instrumenter-loader",
                    options: {
                        esModules: true
                    },
                }],
                include: [resolve('src'), resolve('test')]
            },

            // vue loader
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            js: 'babel-loader'
                        },
                        // 为了统计代码覆盖率，对 vue 文件加入 istanbul-instrumenter-loader
                        preLoaders: {
                            js: 'istanbul-instrumenter-loader?esModules=true'
                        }
                    }
                }]
            },

            // css loader
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'vue-style-loader'
                })
            },

            // img loader
            {
                test: /\.(png|gif|jpe?g)(\?\S*)?$/,
                use: [{loader: 'url-loader'}]
            },

            // font loader
            {
                test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
                use: [{loader: 'url-loader'}]
            },
        ]
    },

    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
        }
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ]
}

module.exports = webpackConfig

```
### 编写测试文件xxx.spec.js
```
import Vue from 'vue' // 导入Vue用于生成Vue实例
import Hello from '@/components/Hello' // 导入组件
// 测试脚本里面应该包括一个或多个describe块，称为测试套件（test suite）
describe('Hello.vue', () => {
  // 每个describe块应该包括一个或多个it块，称为测试用例（test case）
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello) // 获得Hello组件实例
    const vm = new Constructor().$mount() // 将组件挂在到DOM上
    //断言：DOM中class为hello的元素中的h1元素的文本内容为Welcome to Your Vue.js App
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})

```
说明：
> * 脚本命名方式为  [组件名].spec.js。
> * 所谓断言，就是对组件做一些操作，并预言产生的结果。如果测试结果与断言相同则测试通过。
> * 单元测试默认测试 src 目录下除了 main.js 之外的所有文件，可在 test/unit/index.js 文件中修改。
> * Chai断言库中，to be been is that which and has have with at of same 这些语言链是没有意义的，只是便于理解而已。
> * 测试脚本由多个  descibe 组成，每个 describe 由多个 it 组成。

### 在package.json文件中添加test脚本，如下所示：
```
"scripts": {
    "dev": "node build/dev-server.js",
    "start": "node build/dev-server.js",
    "build": "node build/build.js",
    "test": "karma start karma.conf.js"
  },
```

完成以上步骤就完成了所有的配置，运行npm run unit,在控制台会显示单元测试的情况，完成后会在test/report/unit目录下生成测试报告文件，如下图所示：
其中，line coverage表示行覆盖率，function coverage表示函数覆盖率，branch coverage表示分支覆盖率（是否每个if代码块都执行了？），statement coverage 表示语句覆盖率。
![测试报告目录][2]
打开index.html文件可以查看测试报告，如下图所示:
![此处输入图片的描述][3]

到此，karam+chai的一个简单测试已经完成。
### 参考文档
1.https://www.npmjs.com/package/karma

2.http://karma-runner.github.io/2.0/config/configuration-file.html

3.https://www.jianshu.com/p/a515fbbdd1b2

4.https://www.jianshu.com/p/073d25a3bba0





  [1]: https://raw.githubusercontent.com/UnicomBigData/test/master/static/readme/karma.png
  [2]: https://raw.githubusercontent.com/UnicomBigData/test/master/static/readme/coverage%E7%9B%AE%E5%BD%95%E6%96%87%E4%BB%B6.png
  [3]: https://raw.githubusercontent.com/UnicomBigData/test/master/static/readme/%E6%B5%8B%E8%AF%95%E6%8A%A5%E5%91%8A.png
